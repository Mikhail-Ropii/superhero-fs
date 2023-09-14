const data = require("../../data");

const uploadImg = async (req, res, next) => {
  const result = await data.uploadImg(req);
  res.json(result);
};

module.exports = uploadImg;
