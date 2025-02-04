import request from 'supertest';  // Supertest pour faire des requêtes HTTP
import express from 'express';    // Express pour créer une application temporaire
import { searchArtist } from '../controllers/searchController'; // Importation de ton contrôleur

// Crée une application Express temporaire pour les tests
const app = express();
app.get('/api/search', searchArtist);  // Route que tu veux tester

describe('Test de la fonction searchArtist', () => {
  it("devrait retourner 400 si le paramètre 'artist' est manquant", async () => {
    const response = await request(app).get('/api/search');  // Appel sans paramètre 'artist'
    expect(response.status).toBe(400);  // Vérifie que le statut est 400
    expect(response.body.message).toBe("Le paramètre 'artist' est requis.");  // Vérifie le message d'erreur
  });

  it("devrait retourner les résultats de l'API Deezer pour un artiste valide", async () => {
    const artistName = 'Eminem';  // Remplace par un artiste que tu veux tester
    const response = await request(app).get(`/api/search?artist=${artistName}`);
    expect(response.status).toBe(200);  // Vérifie que la réponse est réussie
    expect(response.body).toHaveProperty('data');  // Vérifie qu'il y a une propriété 'data' dans la réponse
  });
});
