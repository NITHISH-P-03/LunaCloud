const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() }); // changed to memory storage
module.exports = upload;
