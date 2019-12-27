import express, { Router } from "express";
import "./database/connection";

const app = express();
const router = Router();

app.use(router);

export default app;
