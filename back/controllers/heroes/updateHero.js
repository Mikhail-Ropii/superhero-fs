const data = require("../../data");

const updateHero = async (req, res, next) => {
  const result = await data.updateHero(req);
  res.json(result);
};

module.exports = updateHero;
