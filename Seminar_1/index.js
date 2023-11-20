const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  res.end(`<h1>Главная</h1>`);
});

const port = 3000;
server.listen(port);
