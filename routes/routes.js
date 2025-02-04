import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
    res.send("Bienvenue dans l'API musique !");
});

export default router;