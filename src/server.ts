import app from "./app";
import bodyParser from "body-parser";
import { PORT } from "./config";

app.use(bodyParser.json());

const server = app.listen(PORT, () => {
  console.log("running on port", PORT);
});

export default server;
