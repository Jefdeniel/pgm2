const fs = require("fs");

fs.readdirSync("./storage").forEach(fileName => {
  fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage", err => {
  if (err) {
    throw err;
  }

  console.log("./storage directory removed");
});
