import { Router } from 'express';

import { getFirstGeneration, getNewGeneration } from '../controllers/game.controller';

const router = Router();

router.get('/game-states', getFirstGeneration);
router.post('/game-states', getNewGeneration);

export default router;
