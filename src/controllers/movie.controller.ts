import { Request, Response } from "express";
import { movieServices } from "../services";
import {
  IReadReturn,
  TMovie,
  TMovieArray,
  TMovieCreate,
  TMovieUpdate,
} from "../interfaces";

const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const movieCreated: TMovieCreate = await movieServices.create(req.body);

  return res.status(201).json(movieCreated);
};

const readMovies = async (req: Request, res: Response): Promise<Response> => {
  const listMovies: IReadReturn<TMovieArray> = await movieServices.read(res.locals.pagination);

  return res.status(200).json(listMovies);
};

const updateMovies = async (req: Request, res: Response): Promise<Response> => {
  const { foundMovie } = res.locals;

  const payload: TMovieUpdate = req.body;

  const movieUpdated: TMovie = await movieServices.update(foundMovie, payload);

  return res.status(200).json(movieUpdated);
};

const deleteMovies = async (req: Request, res: Response): Promise<Response> => {
  await movieServices.destroy(res.locals.foundMovie);

  return res.status(204).send();
};

export { createMovie, readMovies, updateMovies, deleteMovies };
