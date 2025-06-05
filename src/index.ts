import "reflect-metadata";
import { AppDataSource } from "./data-source";
import app from "./app";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Base de datos conectada");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Error al conectar DB", error));
