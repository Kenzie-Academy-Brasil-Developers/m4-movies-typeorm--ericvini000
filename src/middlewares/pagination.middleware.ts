import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction): void => {
  const queryPerPage = Number(req.query.perPage);
  const queryPage = Number(req.query.page);

  const perPage: number =
    queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;
  const page: number = queryPage && queryPage > 1 ? queryPage : 1;

  const prevPage: string = `http://localhost:3000/movies?page=${
    page-1
  }&perPage=${perPage}`;
  const nextPage: string = `http://localhost:3000/movies?page=${
    page+1
  }&perPage=${perPage}`;

  const pagination = {
    page: (page - 1) * perPage,
    perPage,
    nextPage,
    prevPage,
  };

  res.locals = { ...res.locals, pagination };

  return next();
};
