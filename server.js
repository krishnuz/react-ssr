import React from "react";
import express from "express";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import fs from "fs";
import { ServerStyleSheet } from "styled-components";
import App from "./src/App";
import InitialDataContext from "./src/InitialDataContext";

const PORT = 3000;

const articles = [
  { title: "Article 1", author: "Krishna" },
  { title: "Article 2", author: "Prakash" },
  { title: "Article 3", author: "Varun" },
];

const app = express();

app.use(express.static("./build", { index: false }));

app.get("/api/articles", (req, res) => {
  const loadedArticles = articles;
  res.json(loadedArticles);
});

app.get("/*", async (req, res, next) => {
  const sheet = new ServerStyleSheet();

  const contextObj = { _isServerSide: true, _requests: [], _data: {} };
  ReactDomServer.renderToString(
    sheet.collectStyles(
      <InitialDataContext.Provider value={contextObj}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </InitialDataContext.Provider>
    )
  );

  await Promise.all(contextObj._requests);
  contextObj._isServerSide = false;
  delete contextObj._requests;

  const appHTML = ReactDomServer.renderToString(
    <InitialDataContext.Provider value={contextObj}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </InitialDataContext.Provider>
  );

  fs.readFile("./build/index.html", "utf-8", (error, data) => {
    if (error) {
      console.error("Error--", error);
      res.status(500).send("Internal server error");
    } else {
      res.send(
        data
          .replace(
            '<div id="root"></div>',
            `<script>window.preloadedData=${JSON.stringify(
              contextObj
            )}</script><div id="root">${appHTML}</div>`
          )
          .replace("</head>", `${sheet.getStyleTags()}</head>`)
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
