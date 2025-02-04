import express from "express";
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, Express !");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
