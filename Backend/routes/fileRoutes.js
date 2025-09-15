// routes/files.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const auth = require("../middleware/auth");
const { uploadFile, getFiles, deleteFile, renameFile, downloadFile,deleteAccount } = require("../controllers/fileController");

router.post("/upload", auth, upload.single("file"), uploadFile);
router.get("/", auth, getFiles);
router.delete("/:id", auth, deleteFile);
router.put("/rename/:id", auth, renameFile);
router.get("/download/:id", auth, downloadFile);



module.exports = router;
