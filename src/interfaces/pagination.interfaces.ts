export interface IReadReturn<I> {
  prevPage: string;
  nextPage: string;
  count: number;
  data: I;
};

export interface IPagination {
  page: number;
  perPage: number;
  prevPage: string | null;
  nextPage: string | null;
  order: string;
  sort: string;
};
