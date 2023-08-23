export interface IReadReturn<I> {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: I;
}

export interface IPagination {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  nextPage: string | null;
  prevPage: string | null;
}
