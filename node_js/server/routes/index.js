const express = require("express");
const router = express.Router();
const newsJson = require("../data/news.json");
const path = require("path");
const filePathNews = path.join(__dirname, "..", "data", "news.json");

const data = fs.readFileSync(filePathNews, { encoding: "utf8", flag: "r" });
const posts = JSON.parse(data);
console.log(data);

router.get("/", (request, response) => {
  response.status(200).json({
    message: "Greetings",
  });
});

router.get("/posts", (request, response) => {
  response.status(200).json(newsJson);
});

router.get("/posts/:postId", (request, response) => {
  const { id } = request.params;
  const post = newsJson.find((article) => {
    return article.id === parseInt(postId);
  });
  response.status(200).json(post);
});

router.post("/posts", (request, response) => {
  const post = req.body;
  console.log(post);
  response.status(200).json(post);
});
modules.exports = router;
