import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

export default AppDataSource.getRepository(Movie);
