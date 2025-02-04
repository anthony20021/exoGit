import express from "express";
import { firstController, searchAlbum } from "../controllers/index.js";

const router = express.Router();

router.get("/", firstController);
router.get("/albums/search", searchAlbum); // Ajout de la route de recherche

export default router;
