const data = require("../../data");

const getAllHeroes = async (req, res, next) => {
  const { result, hasMore } = await data.getAllHeroes(req);
  res.json({ result, hasMore });
};

module.exports = getAllHeroes;
