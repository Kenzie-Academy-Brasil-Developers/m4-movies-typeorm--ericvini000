import express, { Application, json } from "express";
import { movieRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();

app.use(json());

app.use("/movies", movieRouter);

app.use(middlewares.errorHandler);

export default app;
