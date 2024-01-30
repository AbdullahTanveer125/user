const multer = require("multer");


// Set up Multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");
    },
});

exports.upload = multer({ storage: storage });