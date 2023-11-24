const express = require("express");
const fs = require("fs");
const path = require("path");
const { checkBody, checkParams } = require("./validation/validator");
const { idScheme, userScheme } = require("./validation/scheme");

const app = express();

let uniqueID;

const pathToDataFile = path.join(__dirname, "data.json");

const getUsers = () => {
  const users = JSON.parse(fs.readFileSync(pathToDataFile, "utf-8"));
  if (users) {
    uniqueID = users[users.length - 1].id;
    return users;
  } else {
    return [];
  }
};

const saveUsers = (users) => {
  fs.writeFileSync(pathToDataFile, JSON.stringify(users, null, 2));
};

app.use(express.json());

/**
 * Получаем всех пользователей
 */
app.get("/users", (req, res) => {
  const users = getUsers();
  res.send({ users });
});

/**
 * Получаем конкретного пользователя
 */

app.get("/users/:id", checkParams(idScheme), (req, res) => {
  const users = getUsers();
  const user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    res.send({ user });
  } else {
    res.status(404).send({ article: null });
  }
});

/**
 * Создаем пользователя
 */
app.post("/users", checkBody(userScheme), (req, res) => {
  const users = getUsers();
  uniqueID += 1;

  users.push({ id: uniqueID, ...req.body });
  saveUsers(users);

  res.send({ id: uniqueID });
});

/**
 * Изменяем пользователя
 */
app.put(
  "/users/:id",
  checkParams(idScheme),
  checkBody(userScheme),
  (req, res) => {
    const users = getUsers();
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.city = req.body.city;
      user.age = req.body.age;

      saveUsers(users);
      res.send({ user });
    } else {
      res.status(404).send({ user: null });
    }
  }
);

/**
 * Удаляем пользователя
 */
app.delete("/users/:id", checkParams(idScheme), (req, res) => {
  const users = getUsers();
  const user = users.find((user) => user.id === Number(req.params.id));

  if (user) {
    const userIndex = users.indexOf(user);
    users.splice(userIndex, 1);

    saveUsers(users);
    res.send({ user });
  } else {
    res.status(404).send({ user: null });
  }
});

/**
 * Обработка несуществующего роута
 */
app.use((req, res) => {
  res.status(404).send({ message: "Url not found!" });
});

//Запуск сервера
app.listen(3000, () => {
  console.log("Сервер запущен!");
});
