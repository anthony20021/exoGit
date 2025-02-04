export const firstController = async (req, res) => {
    res.send("Bienvenue dans l'API musique !");
};

export const getCharts = async (req, res) => {
    const { name } = req.params;
    fetch('https://api.deezer.com/chart')
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => console.log(data)) // Afficher les données
        .catch(error => console.error('Erreur :', error)); // Gérer les erreurs
};