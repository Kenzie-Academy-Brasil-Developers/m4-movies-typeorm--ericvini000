import { TMovie, TMovieArray, TMovieCreate, TMovieUpdate } from "../interfaces";
import { movieRepository } from "../repositories";

const create = async (payload: TMovieCreate): Promise<TMovie> => {
  const movieCreated: TMovie = await movieRepository.create(payload);
  await movieRepository.save(movieCreated);

  return movieCreated;
};

const read = async (): Promise<TMovieArray> => {
  return await movieRepository.find();
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
