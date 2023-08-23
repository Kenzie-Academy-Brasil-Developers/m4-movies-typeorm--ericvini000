import {
  IPagination,
  IReadReturn,
  TMovie,
  TMovieArray,
  TMovieCreate,
  TMovieUpdate,
} from "../interfaces";
import { movieRepository } from "../repositories";

const create = async (payload: TMovieCreate): Promise<TMovie> => {
  const movieCreated: TMovie = await movieRepository.create(payload);
  await movieRepository.save(movieCreated);

  return movieCreated;
};

const read = async ({
  page,
  perPage,
  orderValue,
  sortValue,
  nextPage,
  prevPage,
}: IPagination): Promise<IReadReturn<TMovieArray>> => {
  const [movies, count]: Array<TMovieArray | number> =
    await movieRepository.findAndCount({
      order: { [sortValue]: orderValue },
      skip: page, //offset
      take: perPage, //limit
    });

  console.log(page);
  console.log(prevPage);

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const update = async (
  product: TMovie,
  payload: TMovieUpdate
): Promise<TMovie> => {
  return await movieRepository.save({ ...product, ...payload });
};

const destroy = async (product: TMovie): Promise<void> => {
  await movieRepository.remove(product);
};

export default { create, read, update, destroy };
