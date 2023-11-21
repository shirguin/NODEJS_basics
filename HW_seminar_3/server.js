const express = require("express");
const fs = require("fs");
const path = require("path");

const port = 3000;
const pathToCountersFile = path.join(__dirname, "counters.json");

const getCounter = (counterName) => {
  const counters = JSON.parse(fs.readFileSync(pathToCountersFile, "utf-8"));
  let result = 0;
  if(counterName == "counter_1"){
    counters.counter_1++;
    result = counters.counter_1;
  }else if(counterName == "counter_2"){
    counters.counter_2++;
    result = counters.counter_2;
  }

  fs.writeFileSync(pathToCountersFile, JSON.stringify(counters, null, 4));
  return result;
};

function start() {
  const app = express();

  app.use((req, res, next) => {
    console.log(`Поступил запрос: ${req.method} c адресса: ${req.url}`);
    next();
  });

  app.use(express.static("static"));

  app.get("/", (req, res) => {
    res.send(`
        <h1>Главная страница</h1>
        <p>Просмотров: ${getCounter("counter_1")}</p>
        <a href="/about">Перейти на страницу "О нас"</a>`);
  });

  app.get("/about", (req, res) => {
    res.send(`
        <h1>Страница о нас</h1>
        <p>Просмотров: ${getCounter("counter_2")}</p>
        <a href="/">Перейти на Главную страницу</a>`);
  });

  app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${port}`);
  });
}

exports.start = start;
