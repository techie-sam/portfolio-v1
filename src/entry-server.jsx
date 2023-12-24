import React from "react";
import ReactDOMServer from "react-dom/server";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  return { html };
}
