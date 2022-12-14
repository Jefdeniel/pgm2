const { createServer } = require("http");
const data = require("./cats");

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  if (req.url.toLowerCase() === "/biscuit") {
    let biscuit = data.filter((cat) => cat.name === "Biscuit");
    res.end(JSON.stringify(biscuit));
  } else if (req.url.toLowerCase() === "/tiger") {
    let tiger = data.filter((cat) => cat.name === "tiger");
    res.end(JSON.stringify(tiger));
  res.end(JSON.stringify(data));
}).listen(3000);

console.log("run server at 3000");
