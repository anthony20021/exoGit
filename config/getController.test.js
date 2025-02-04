import { getCharts } from "../controllers/getController.js";

describe('getCharts', () => {
    let req, res;

    beforeEach(() => {
        req = {};
        res = {
            json: jest.fn(),
            send: jest.fn()
        };
    });

    it('should fetch charts and return data as JSON', async () => {
        fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue()
        });

        await getCharts(req, res);

        expect(fetch).toHaveBeenCalledWith('https://api.deezer.com/chart');
        expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('should handle fetch errors', async () => {
        const mockError = new Error('Fetch error');
        fetch.mockRejectedValue(mockError);
        console.error = jest.fn();

        await getCharts(req, res);

        expect(fetch).toHaveBeenCalledWith('https://api.deezer.com/chart');
        expect(console.error).toHaveBeenCalledWith('Erreur :', mockError);
    });
});