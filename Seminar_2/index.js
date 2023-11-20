const { calculateResultSum } = require("./calculateResultSum.js");
const colors = require("colors");

const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

total > 50 ? console.log(colors.red(total)) : onsole.log(colors.green(total));
