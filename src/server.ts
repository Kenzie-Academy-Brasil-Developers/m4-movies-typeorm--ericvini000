import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err: any) => {
    console.log(err);
  });
