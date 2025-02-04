import request from "supertest";
import app from "../index.js";

describe("Recherche d'artiste avec Deezer API", () => {
    it("devrait retourner des résultats pour un artiste donné", async () => {
        const response = await request(app).get("/search?artist=eminem");
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data.length).toBeGreaterThan(0);
    });

    it("devrait retourner une erreur si l'artiste n'est pas fourni", async () => {
        const response = await request(app).get("/search");
        
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("message", "Le paramètre 'artist' est requis.");
    });
});
