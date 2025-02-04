import express from 'express';
import { firstController } from '../controllers/index.js';

const router = express.Router();

router.get('', firstController);
router.get('/genre', genreController);

export default router;