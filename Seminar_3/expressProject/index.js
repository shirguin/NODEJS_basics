const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Поступил запрос", req.method, req.url);
  next();
});

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile("static/index.html");
});

app.get("/about/", (req, res) => {
    res.sendFile("static/about.html");
  });

const port = 3000;

app.listen(port, () => {
  console.log(`Сервер запущен на портк ${port}`);
});
