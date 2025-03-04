import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import InitialDataContext from "./InitialDataContext";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <InitialDataContext.Provider value={window && window.preloadedData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InitialDataContext.Provider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
