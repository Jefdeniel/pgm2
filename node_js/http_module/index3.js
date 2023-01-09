const { createServer } = require("http"); // Niet https
const { createReadStream } = require("fs");
const { send } = require("process");

const sendFile = (res, status, type, file) => {
  res.writeHead(status, { "Content-Type": type });
  createReadStream(file).pipe(res);
};

createServer((req, res) => {
  switch (
    req.url // Belangrijk dat het hier req.url is en niet reg.rel
  ) {
    case "/":
      return sendFile(res, 200, "text/html", "./home-page.html");
    case "/img/desert-mountains.jpg":
      return sendFile(res, 200, "image/jpg", "./desert-mountains"); // laatste is locatie van de file
    case "/styles/css":
      return sendFile(res, 200, "text/css", "./styles.css"); // Text/css is altijd zo bij CSS file
    default: // bij switch altijd een default hebben ook
      return sendFile(res, 404, "text.html", "./404.html");
  }
}).listen(3000);

console.log("web server at 3000");
