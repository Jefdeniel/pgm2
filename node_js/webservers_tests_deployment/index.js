const https = require("https");
const fs = require("fs"); // File System

const options = {
  hostname: "en.wikipedia.org",
  port: 443, // 443 is the default port for https
  path: "/wiki/George_Washington",
  method: "GET", // GET is the default method to get data
};

const request = https.request(options, (res) => {
  let responseBody = "";
  res.setEncoding("UTF-8");
  res.on("data", (chunk) => {
    console.log("---chunk", chunk.length);
    responseBody += chunk;
  });
  res.on("end", () => {
    fs.writeFile("george-washington.html", responseBody, (err) => {
      if (err) {
        throw err;
      }
      console.log("File downloaded");
    });
  });
});

request.end();
