import { z } from "zod";
import { movieSchema, movieSchemaCreate } from "../schemas";
import { DeepPartial } from "typeorm";

type TMovie = z.infer<typeof movieSchema>;

type TMovieArray = Array<TMovie>;

type TMovieCreate = z.infer<typeof movieSchemaCreate>;

type TMovieUpdate = DeepPartial<TMovieCreate>;

export { TMovie, TMovieCreate, TMovieUpdate, TMovieArray };
