import express from 'express';
import dinosaurRoutes from './routes/dinosaur.routes';

const app = express();

app.use(express.json());

app.use('/api/dinosaurs', dinosaurRoutes);

export default app;