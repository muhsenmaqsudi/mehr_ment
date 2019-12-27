import app from "./app";
import { PORT } from "./config";

const server = app.listen(PORT, () => {
  console.log(`App is running on http://127.0.0.1:${PORT}`);
});

export default server;
