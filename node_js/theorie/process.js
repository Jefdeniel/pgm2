const process = require("process");
console.log(process.env);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

const path = require("path");

let folders = process.env.PATH.split(path.delimiter);
console.log(folders);
