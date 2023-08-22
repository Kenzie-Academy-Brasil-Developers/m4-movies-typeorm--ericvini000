import { movieRepository } from "../repositories";

const create = async (payload: any) => {
  const movieCreated = await movieRepository.create(payload);

  await movieRepository.save(movieCreated);

  return movieCreated;
};

const read = async () => {
  const allMovies = await movieRepository.find();

  return allMovies;
};

const update = async (id: number, payload: any) => {
  const movieUpdated = await movieRepository.update(id, payload);

  return movieUpdated;
};

const destroy = async (id: number): Promise<void> => {
  await movieRepository.delete(id);

  return;
};

export default { create, read, update, destroy };
