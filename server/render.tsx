import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

export default function render(req: Request, res: Response) {
  const App = require("../ssr/root-ssr.js").default;

  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../client/index.html"),
    {
      encoding: "utf8",
    }
  );
  let appHTML = ReactDOMServer.renderToString(
    <StaticRouter location={req.originalUrl}>
      <App />
    </StaticRouter>
  );

  indexHTML = indexHTML.replace(
    '<div id="app"></div>',
    `<div id="app">${appHTML}</div>`
  );

  // устанавливаем заголовок и статус
  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
}
