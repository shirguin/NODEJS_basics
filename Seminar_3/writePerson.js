const fs = require("fs");
const path = require("path");

const data = {
    name:"Ivan",
    surname:"Ivanov",
    age:"49",
    city:"Moscow"
};

fs.writeFileSync(path.join(__dirname, "person.json"), JSON.stringify(data, null, 4));