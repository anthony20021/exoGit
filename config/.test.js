import { firstController } from "../controllers";

test("Affichage de la route principale", async () => {
    const req = {}; //Pas de req sur firstController
    const res = {
        send: jest.fn() // Simule une res
    };

    await firstController(req, res);

    expect(res.send).toHaveBeenCalledWith("Bienvenue dans l'API musique !");
});

