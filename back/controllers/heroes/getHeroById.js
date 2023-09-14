const data = require("../../data");
const { createError } = require("../../helpers/createError");

const getHeroById = async (req, res, next) => {
  const result = await data.getHeroById(req);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getHeroById;
