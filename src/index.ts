import { Router, Request, Response } from "express";
import { server as app, PORT } from "./config";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Its Working");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} `);
});
