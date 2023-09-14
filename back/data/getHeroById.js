const { Hero } = require("../models/hero");

const getHeroById = async (req) => {
  const { heroId } = req.params;
  const result = await Hero.findById(heroId);

  return result;
};

module.exports = getHeroById;
