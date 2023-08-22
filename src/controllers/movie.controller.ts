import { Request, Response } from "express";
import movieServices from "../services/movie.service";

const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const movieCreated = await movieServices.create(req.body);

  return res.status(201).json(movieCreated);
};

const readMovies = async (req: Request, res: Response): Promise<Response> => {
  const listMovies = await movieServices.read();

  return res.status(200).json(listMovies);
};

const updateMovies = async (req: Request, res: Response): Promise<Response> => {
  const { foundMovie } = res.locals;

  const payload = req.body;

  const movieUpdated = await movieServices.update(foundMovie, payload);

  return res.status(200).json(movieUpdated);
};

const deleteMovies = async (req: Request, res: Response): Promise<Response> => {
  await movieServices.destroy(res.locals.foundMovie);

  return res.status(204).send();
};

export { createMovie, readMovies, updateMovies, deleteMovies };
