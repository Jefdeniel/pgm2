const { createServer } = require("http");

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(´
    <!DOCTYPE html>
    <html>
      <head>
        <title>Node.js</title>
      </head>
      <body>
        <h1>sverving html</h1>
      </body>
    </html>

    ´);
}).listen(3000); // 3000 is the port number, 80 is the default port number for http

console.log("Server running at http://localhost:3000/");
