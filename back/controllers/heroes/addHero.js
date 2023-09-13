const { Hero } = require("../../models/hero");

const addHero = async (req, res, next) => {
  const result = await Hero.create(req.body);
  res.status(201).json(result);
};

module.exports = addHero;
