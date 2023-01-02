const fs = require("fs");

// fs.renameSync("./assets/logs", "accounts/logs");
// console.log("logs folder moved");

// fs.rmdir("./assets", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("./assets directory removed");
//   }
// });

fs.readdirSync("./accounts").forEach((file) => {
  fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});

console.log("Files Removed");
fs.rmdirSync("./accounts");
console.log("Folder Removed");
