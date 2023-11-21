const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "person.json");

const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

data.age -=10;
data.city = "N.Novgorod";

fs.writeFileSync(pathToFile, JSON.stringify(data, null, 4));