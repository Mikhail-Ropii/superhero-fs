const data = require("../../data");

const addHero = async (req, res, next) => {
  const result = await data.addHero(req);
  res.status(201).json(result);
};

module.exports = addHero;
