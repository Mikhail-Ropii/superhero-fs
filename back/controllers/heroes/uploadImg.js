// const path = require("path");
const fs = require("fs/promises");
const { v4: uuidv4 } = require("uuid");
// const Jimp = require("jimp");
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "dahd5gsji",
  api_key: "344919546558246",
  api_secret: "xf2EdPf9nd8aBT0xQL59MnB91Ow",
});

// const tempDir = path.join(__dirname, "../../", "temp/");

const uploadImg = async (req, res, next) => {
  // const path = tempDir + req.file.filename;

  try {
    const { path: tempDir } = req.file;
    const imgId = uuidv4();
    const result = await cloudinary.uploader.upload(tempDir, {
      folder: "heroes",
      width: 300,
      height: 300,
      public_id: imgId,
    });
    res.json(result);
    fs.unlink(tempDir);
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
    console.log(error);
  }
  // try {
  //   const { path: tempDir, originalname } = req.file;
  //   const [extention] = originalname.split(".").reverse();
  //   const imgId = uuidv4();
  //   const newName = `${imgId}.${extention}`;
  //   const resultDir = path.join(heroesDir, newName);
  //   await fs.rename(tempDir, resultDir);
  //   await Jimp.read(resultDir).then((image) => {
  //     return image.resize(300, 300).write(resultDir);
  //   });
  //   const imgURL = path.join("heroes", newName);
  //   res.json(imgURL);
  // } catch (error) {
  //   fs.unlink(path);
  //   next(error);
  // }
};

module.exports = uploadImg;
