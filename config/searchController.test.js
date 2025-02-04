import { searchArtist } from "../controllers/searchController"; // Importation de ton contrôleur

/**
 * Tests unitaires pour la fonction searchArtist
 */
describe("Test de la fonction searchArtist", () => {
  /**
   * Vérifie que la fonction renvoie 400 si le paramètre 'artist' est manquant
   */
  it("devrait retourner 400 si le paramètre 'artist' est manquant", async () => {
    // Mock des objets req et res
    const req = { params: {} }; // Pas de paramètre 'artist'
    const res = {
      status: jest.fn().mockReturnThis(), // Simule `res.status()`
      json: jest.fn(), // Simule `res.json()`
    };

    await searchArtist(req, res);

    expect(res.status).toHaveBeenCalledWith(400); // Vérifie que le statut est 400
    expect(res.json).toHaveBeenCalledWith({
      message: "Le paramètre 'artist' est requis.",
    }); // Vérifie la réponse JSON
  });

  /**
   * Vérifie que la fonction renvoie les résultats de l'API Deezer pour un artiste valide
   */
  it("devrait retourner les résultats de l'API Deezer pour un artiste valide", async () => {
    const req = { params: { artist: "Eminem" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await searchArtist(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });
});
