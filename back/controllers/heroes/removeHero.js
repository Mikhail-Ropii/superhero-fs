const { Hero } = require("../../models/hero");
const { createError } = require("../../helpers/createError");

const removeHero = async (req, res, next) => {
  const { heroId } = req.params;
  const result = await Hero.findByIdAndRemove(heroId);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Superhero deleted" });
};

module.exports = removeHero;
