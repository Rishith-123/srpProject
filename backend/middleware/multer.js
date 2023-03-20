const multer = require("multer");
const path = require("path")
//configure how the files are stored
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
  cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
   cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
  //reject a file if it's not a jpg or png
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage
});

module.exports = upload;