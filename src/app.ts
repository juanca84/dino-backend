import express from "express";
import cors from "cors";
import dinosaurRoutes from "./routes/dinosaur.routes";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/dinosaurs", dinosaurRoutes);

export default app;
