const express = require("express");
const router = express.Router();
const { deleteAccount } = require("../controllers/fileController"); // or userController
const auth = require("../middleware/auth"); // if you want to protect the route

// DELETE account route
router.delete("/delete-account/:id", auth, deleteAccount);

module.exports = router;
