import { NextFunction, Request, Response } from "express";
import { movieRepository } from "../repositories";
import { AppError } from "../errors";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = Number(req.params.id);

  const foundMovie = await movieRepository.findOneBy({ id });

  if (!foundMovie) throw new AppError("Movie not found", 404);

  res.locals = { ...res.locals, id };

  return next();
};
