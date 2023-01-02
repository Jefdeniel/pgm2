const fs = require("fs");

// fs.renameSync("./lib/project-config.js", "./lib/project-test.js");

// console.log("File renamed");

// fs.rename("./lib/notes.md", "./notes.md", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Notes.md moved successfully");
// });

fs.unlinkSync("./lib/project-test.js"); // Zo verwijder je een bestand zelfs in een ander folder

console.log("File removed");
