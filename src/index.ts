import { Router, Request, Response } from "express";
import { server as app } from "./config";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Its Working");
});

app.use(router);

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
