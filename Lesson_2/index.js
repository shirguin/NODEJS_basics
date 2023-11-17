const hellow = require('./hellow.js');

//Импортируем библиотеку uuid 
const uuid = require('uuid');

//Генерируем UUID
const id = uuid.v4();
//Выводим сгенерированный идентификатор в консоль
console.log(id);

hellow.sayHello();
