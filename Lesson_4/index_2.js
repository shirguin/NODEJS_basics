const express = require("express");
const path = require("path");
const fs = require("fs");
const handlebars = require('handlebars');


const app = express();

const articles = [
  { title: "Article 1", description: "First awesome article" },
  { title: "Article 1", description: "Second awesome article" },
  { title: "Article 1", description: "Third awesome article" },
];

app.get("/", (req, res) => {
  const pathToTemplate = path.join(__dirname, "/templates/home.handlebars");

fs.readFile(pathToTemplate, 'utf-8', (err, data)=>{
    if(err){
        res.status(500);
        res.send(err.message);
    }else{
        const template=handlebars.compile(data);
        res.send(template({articles}));
    }
})
});

app.listen(3000, () => {
  console.log("Сервер запущен");
});
