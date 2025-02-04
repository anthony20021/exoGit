import express from 'express';
import { firstController, searchAlbum } from '../controllers/index.js';
import { genreController } from '../controllers/genreController.js';
import { searchArtist } from "../controllers/searchController.js";
import { getCharts } from "../controllers/getController.js";

const router = express.Router();

router.get('', firstController);
router.get('/genre/:number', genreController);
router.get("/charts", getCharts);
router.get("/api/search/:artist", searchArtist);
router.get("/albums/search", searchAlbum); // Ajout de la route de recherche

export default router;
