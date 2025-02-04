import fetch from "node-fetch";

export const firstController = async (req, res) => {
    res.send("Bienvenue dans l'API musique !");
};

export const searchAlbum = async (req, res) => {
    try {
        const { album } = req.query;

        if (!album) {
            return res.status(400).json({ error: "Veuillez fournir un nom d'album." });
        }

        const url = `https://musicbrainz.org/ws/2/release-group/?query=${encodeURIComponent(album)}&fmt=json`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data["release-groups"] || data["release-groups"].length === 0) {
            return res.status(404).json({ message: "Aucun album trouvé." });
        }

        const albums = data["release-groups"].map(album => ({
            id: album.id,
            title: album.title,
            artist: album["artist-credit"]?.[0]?.name || "Inconnu",
            releaseDate: album["first-release-date"] || "Date inconnue"
        }));

        res.json(albums);
    } catch (error) {
        console.error("Erreur lors de la récupération des albums :", error);
        res.status(500).json({ error: "Erreur interne du serveur." });
    }
};

export const getCharts = async (req, res) => {
    const { name } = req.params;
    fetch('https://api.deezer.com/chart')
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => console.log(data)) // Afficher les données
        .catch(error => console.error('Erreur :', error)); // Gérer les erreurs
};