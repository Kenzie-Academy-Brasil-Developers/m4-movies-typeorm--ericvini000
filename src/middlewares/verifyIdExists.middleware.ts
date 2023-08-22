import { NextFunction, Request, Response } from "express";
import { movieRepository } from "../repositories";
import { AppError } from "../errors";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const movieExists = await movieRepository.findOneBy({ id: parseInt(id) });

  if (!movieExists) throw new AppError("Movie not exists", 404);

  res.locals.id = parseInt(id);

  return next();
};
