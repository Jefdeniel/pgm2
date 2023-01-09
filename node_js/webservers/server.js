import { express } from "express";

const app = express();

app.use("/", express.static("clients"));

app.listen(3000, () => console.log("ski dictionary runnign at 3000"));
