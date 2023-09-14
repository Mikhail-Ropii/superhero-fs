const data = require("../../data");
const { createError } = require("../../helpers/createError");

const removeHero = async (req, res, next) => {
  const result = await data.removeHero(req);
  if (!result) {
    throw createError(404);
  }
  res.json({ message: "Superhero deleted" });
};

module.exports = removeHero;
