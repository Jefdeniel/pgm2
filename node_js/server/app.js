const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");

const HOSTNAME = "127.0.0.1";
const PORT = 8080;

const app = express();
app.use(bodyParser.json());

// routes koppelen aan padnaam
app.use("/api", apiRoutes);

app.listen(PORT, HOSTNAME, (err) => {
  console.log(`Server is listening on HTTP://${HOSTNAME}:${PORT}`);
});
