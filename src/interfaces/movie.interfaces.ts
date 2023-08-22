import { z } from "zod";
import { movieSchema, movieSchemaCreate, movieSchemaUpdate } from "../schemas";

type TMovie = z.infer<typeof movieSchema>;

type TMovieArray = Array<TMovie>;

type TMovieCreate = z.infer<typeof movieSchemaCreate>;

type TMovieUpdate = z.infer<typeof movieSchemaUpdate>;

export { TMovie, TMovieCreate, TMovieUpdate, TMovieArray };
