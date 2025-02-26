import React from "react";
import "isomorphic-fetch";
import useDataSSR from "../useDataSSR";

const Article = () => {
  const articles = useDataSSR("articles", () => {
    return fetch("http://localhost:3000/api/articles").then(response =>
      response.json()
    );
  });

  return (
    articles &&
    articles.map(article => (
      <div key={article.title}>
        {article.title} {article.author}
      </div>
    ))
  );
};
export default Article;
