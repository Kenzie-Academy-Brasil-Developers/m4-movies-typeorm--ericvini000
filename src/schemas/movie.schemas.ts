import { z } from "zod";

const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number(),
  price: z.number(),
});

const movieSchemaCreate = movieSchema.omit({ id: true });

const movieSchemaUpdate = movieSchemaCreate.partial();

export { movieSchema, movieSchemaCreate, movieSchemaUpdate };
