const express = require("express");
const upload =require("../middleware/uploadMiddleware.js");
const { uploadFile, getFiles, deleteFile } = require("../controllers/fileController.js");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/", getFiles);
router.delete("/:id", deleteFile);

module.exports = router;
