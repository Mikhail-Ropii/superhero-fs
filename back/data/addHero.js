const { Hero } = require("../models/hero");

const addHero = async (req) => {
  const result = await Hero.create(req.body);
  return result;
};

module.exports = addHero;
