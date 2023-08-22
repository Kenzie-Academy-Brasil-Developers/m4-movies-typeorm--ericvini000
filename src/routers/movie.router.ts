import { Router } from "express";
import {
  createMovie,
  deleteMovies,
  readMovies,
  updateMovies,
} from "../controllers";
import middlewares from "../middlewares";
import { movieSchemaCreate, movieSchemaUpdate } from "../schemas";

const movieRouter: Router = Router();

movieRouter.post(
  "",
  middlewares.validateBody(movieSchemaCreate),
  middlewares.verifyNameExists,
  createMovie
);

movieRouter.get("", readMovies);

movieRouter.patch(
  "/:id",
  middlewares.validateBody(movieSchemaUpdate),
  middlewares.verifyIdExists,
  middlewares.verifyNameExists,
  updateMovies
);

movieRouter.delete("/:id", middlewares.verifyIdExists, deleteMovies);

export default movieRouter;
