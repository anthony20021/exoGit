import { firstController } from "../controllers";
import { searchArtist } from '../controllers/searchController'; // Importation de ton contrôleur

test("Affichage de la route principale", async () => {
    const req = {}; //Pas de req sur firstController
    const res = {
        send: jest.fn() // Simule une res
    };

    await firstController(req, res);

    expect(res.send).toHaveBeenCalledWith("Bienvenue dans l'API musique !");
});


describe('Test de la fonction searchArtist', () => {
  it("devrait retourner 400 si le paramètre 'artist' est manquant", async () => {
    // Mock des objets req et res
    const req = { params: {} }; 
    const res = {
      status: jest.fn().mockReturnThis(), // Simule `res.status()`
      json: jest.fn() // Simule `res.json()`
    };

    await searchArtist(req, res);

    expect(res.status).toHaveBeenCalledWith(400); // Vérifie que le statut est 400
    expect(res.json).toHaveBeenCalledWith({ message: "Le paramètre 'artist' est requis." }); // Vérifie la réponse JSON
  });

  it("devrait retourner les résultats de l'API Deezer pour un artiste valide", async () => {
    const req = { params: { artist: 'Eminem' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    

    await searchArtist(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });
});


