import { Router } from 'express';

import gameRoutes from './game.route';

const router = Router();

router.use('/api', gameRoutes);

export default router;
