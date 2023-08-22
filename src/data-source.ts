import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import "express-async-errors";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath: string = path.join(__dirname, "migrations/**.{js,ts}");

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing database URL in .env");

  if (process.env.NODE_ENV == "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      logging: true,
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    logging: true,
    synchronize: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSouce: DataSource = new DataSource(dataSourceConfig());

export default AppDataSouce;
