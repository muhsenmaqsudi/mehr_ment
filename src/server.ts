import app from "./app";
import bodyParser from "body-parser";
import { PORT } from "./config";

app.use(bodyParser.json());

const server = app.listen(PORT, () => {
  console.log(`App is running on http://127.0.0.1:${PORT}`);
});

export default server;
