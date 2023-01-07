import express from "express";
import render from "./render";
import path from "path";

const app = express();
const port = 3000;

app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, "../client"))
);

app.listen(port, () => {
  console.log("Server has been starting", port);
});

app.use("*", render);
