const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "dahd5gsji",
  api_key: "344919546558246",
  api_secret: "xf2EdPf9nd8aBT0xQL59MnB91Ow",
});

const uploadImg = async (req) => {
  const { path: tempDir } = req.file;
  const imgId = uuidv4();
  const result = await cloudinary.uploader.upload(tempDir, {
    folder: "heroes",
    transformation: [{ width: 400, height: 400, crop: "fill" }],
    public_id: imgId,
  });
  fs.unlink(tempDir);
  return result;
};

module.exports = uploadImg;
