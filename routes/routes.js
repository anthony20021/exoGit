import express from 'express';
import { firstController } from '../controllers/index.js';
import { genreController } from '../controllers/genreController.js';
import { searchArtist } from "../controllers/searchController.js";
import { getCharts } from "../controllers/getController.js";

const router = express.Router();

router.get('', firstController);
router.get('/genre/:number', genreController);
router.get("/api/search", searchArtist);
router.get("/charts", getCharts);

export default router;