import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "../errors";

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (err instanceof z.ZodError) {
    return res.status(400).json(err.flatten().fieldErrors);
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json(err.message);
  }
  return res.status(500).json({ message: "Internal Server Error" });
};
