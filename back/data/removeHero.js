const { Hero } = require("../models/hero");

const removeHero = async (req) => {
  const { heroId } = req.params;
  const result = await Hero.findByIdAndRemove(heroId);
  return result;
};

module.exports = removeHero;
