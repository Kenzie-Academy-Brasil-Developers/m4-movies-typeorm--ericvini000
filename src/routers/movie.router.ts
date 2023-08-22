import { Router } from "express";
import {
  createMovie,
  deleteMovies,
  readMovies,
  updateMovies,
} from "../controllers";

const movieRouter: Router = Router();

movieRouter.post("", createMovie);

movieRouter.get("", readMovies);

movieRouter.patch("/:id", updateMovies);

movieRouter.delete("/:id", deleteMovies);

export default movieRouter;
