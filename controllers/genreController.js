/**
 * Genre controller
 * @param {import('express').Request} req - Express request
 * @param {import('express').Response} res - Express response
 * @returns {Promise<void>}
 */
export const genreController = async (req, res) => {
  try {
    const response = await fetch(
      `https://api.deezer.com/genre/${req.params.number}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export default genreController;
