const https = require("https");
const fs = require("fs"); // File System

// const options = {
//   hostname: "en.wikipedia.org",
//   port: 443, // 443 is the default port for https
//   path: "/wiki/George_Washington",
//   method: "GET", // GET is the default method to get data
// };

// dit gebruikten we in de originele code maar nu gaan- we het met een const url doen

const url = "https://en.wikipedia.org/wiki/George_Washington";

const request = https.get(url, (res) => {
  // we gebruiken nu https.get ipv https.request
  let download = fs.createWriteStream("george-washington2.html");
  console.log("Downloading file...");
  res.pipe(download);
  res.on("end", () => {
    console.log("Download complete");
  });
});

request.end();

// Door de get method is de code cleaner en korter geworden
