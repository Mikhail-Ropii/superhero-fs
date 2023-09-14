const { Hero } = require("../models/hero");

const updateHero = async (req) => {
  const { heroId } = req.params;

  const result = await Hero.findByIdAndUpdate(heroId, req.body, {
    new: true,
  });
  return result;
};

module.exports = updateHero;
