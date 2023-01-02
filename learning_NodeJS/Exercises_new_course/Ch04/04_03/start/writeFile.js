const fs = require("fs");

let md = `
this is a new file
===================
we can write text to a file with fs.writeFile

the file will be saved in the same location as the app.js file

* test
* test
* test
`;

fs.writeFile("readme.md", md.trim(), (err) => {
  if (err) {
    throw err;
  }
  fs.appendFileSync("readme.md", "\n\n ### Node.js everyone!");
  console.log("File saved");
});
