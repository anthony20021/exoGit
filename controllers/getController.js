export const getCharts = async (req, res) => {
    //const { name } = req.params;
    await fetch(`https://api.deezer.com/chart`)
        .then(response => response.json()) // Convertir la réponse en JSON
        .then(data => res.json(data)) // Afficher les données
        .catch(error => console.error('Erreur :', error)); // Gérer les erreurs
};

export default getCharts;