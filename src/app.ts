import express, { Router, Response, Request } from "express";
import "./database/connection";

import * as bookController from "./controllers";

const app = express();
const router = Router();

router.get("/", (req: Request, res: Response) => res.send("hi"));
router.get("/books", bookController.allBooks);
router.get("/book/:id", bookController.getBook);
router.post("/books", bookController.addBook);
router.put("/book/:id", bookController.updateBook);
router.delete("/book/:id", bookController.deleteBook);

app.use(router);

export default app;
