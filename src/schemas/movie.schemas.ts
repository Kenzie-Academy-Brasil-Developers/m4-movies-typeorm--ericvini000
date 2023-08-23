import { z } from "zod";

const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int(),
});

const movieSchemaCreate = movieSchema.omit({ id: true });

const movieSchemaUpdate = movieSchemaCreate.partial();

export { movieSchema, movieSchemaCreate, movieSchemaUpdate };
