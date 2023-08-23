import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction): void => {
  const queryPerPage = Number(req.query);
  const queryPage = Number(req.query);

  const perPage: number =
    queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;
  const page: number = queryPage && queryPage > 1 ? queryPage : 1;

  const prevPage: string = `https://localhost:3000/movies?page=${
    page - 1
  }&perPage=${perPage}`;
  const nextPage: string = `https://localhost:3000/movies?page=${
    page + 1
  }&perPage=${perPage}`;

  const pagination = {
    page: perPage * (page - 1),
    perPage,
    nextPage,
    prevPage,
  };

  res.locals = { ...res.locals, pagination };

  return next();
};
