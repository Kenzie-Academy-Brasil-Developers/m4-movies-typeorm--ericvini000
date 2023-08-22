import { NextFunction, Response, Request } from "express";
import { movieRepository } from "../repositories";
import { AppError } from "../errors";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  if (!name) return next();

  const movieExists = await movieRepository.findOneBy({ name });

  if (movieExists) throw new AppError("Movie already exists", 409);

  return next();
};
