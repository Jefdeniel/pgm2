const fs = require("fs");

fs.renameSync("./assets/logs", "accounts/logs");
console.log("logs folder moved");
