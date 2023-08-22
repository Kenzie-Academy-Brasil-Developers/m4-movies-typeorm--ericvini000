import { movieRepository } from "../repositories";

const create = async (payload: any) => {
  const movieCreated = await movieRepository.create(payload);
  await movieRepository.save(movieCreated);

  return movieCreated;
};

const read = async () => {
  return await movieRepository.find();
};

const update = async (product: any, payload: any) => {
  return await movieRepository.save({ ...product, ...payload });
};

const destroy = async (product: any): Promise<void> => {
  await movieRepository.remove(product);
};

export default { create, read, update, destroy };
