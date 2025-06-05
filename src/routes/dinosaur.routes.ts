import { Router } from 'express';
import { getAllDinosaurs } from '../controllers/dinosaur.controller';

const router = Router();

router.get('/', getAllDinosaurs);

export default router;