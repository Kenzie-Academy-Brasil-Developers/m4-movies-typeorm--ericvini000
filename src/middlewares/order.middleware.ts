import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction): void => {
  const { sort, order }: any = req.query;

  const [sortOptions, orderOptions]: [Array<string>, Array<string>] = [
    ["price", "duration"],
    ["asc", "desc"],
  ];

  const sortValue = sort && sortOptions.includes(sort) ? sort : "id";
  const orderValue = order && sort && orderOptions.includes(order) ? order : "asc";

  res.locals.pagination = { ...res.locals.pagination, sortValue, orderValue };
  return next();
};
