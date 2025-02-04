import { getCharts } from "../controllers/getController.js";

/**
 * Tests unitaires pour la fonction getCharts
 */
describe("Test de la fonction getCharts", () => {
  /**
   * Vérifie que la fonction retourne un json
   */

  it("devrait retourner les résultats de l'API Deezer pour les charts", async () => {
    const req = {  };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getCharts(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });
});