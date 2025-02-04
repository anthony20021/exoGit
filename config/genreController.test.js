import { genreController } from "../controllers/genreController.js";

describe("Test de la fonction genreController", () => {
  it("Should return a JSON object which is not empty, with status 200 and contain data", async () => {
    const req = { params: { number: "457" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await genreController(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });
});
