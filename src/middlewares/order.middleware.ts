import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction): void => {
  const { sortValue, orderValue }: any = req.query;

  const [sortOptions, orderOptions]: [Array<string>, Array<string>] = [
    ["price", "duration"],
    ["asc", "desc"],
  ];

  const sort = sortValue && sortOptions.includes(sortValue) ? sortValue : "id";
  const order =
    orderValue && orderOptions.includes(orderValue) ? orderValue : "asc";

  res.locals.pagination = { ...res.locals.pagination, sort, order };
  return next();
};
