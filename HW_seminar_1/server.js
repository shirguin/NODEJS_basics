const http = require("http");
let counter_1 = 0;
let counter_2 = 0;

function start() {
  const server = http.createServer((request, response) => {
    console.log("Запрос получен");

    if (request.url === "/") {
      counter_1++;
      response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      response.write(`
        <h1>Корневая страница</h1>
        <p>Просмотров: ${counter_1}</p>
        <a href="/about">Ссылка на страницу /about</a>
      `);
      response.end();
    } else if (request.url === "/about") {
      counter_2++;
      response.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      response.write(`
        <h1>Страница about</h1>
        <p>Просмотров: ${counter_2}</p>
        <a href="/">Ссылка на страницу /</a>
      `);
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
      response.write(`
        <h1>ERROR 404</h1>
        <h1>Страница не найдена!</h1>
        <a href="/">Вернуться на главную страницу</a>
      `);
      response.end();
    }
  });

  const port = 3000;
  server.listen(port);
  console.log("Сервер запущен.");
}

exports.start = start;
