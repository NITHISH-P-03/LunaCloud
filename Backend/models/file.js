

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // link to user
  originalname: { type: String, required: true },
  filename: { type: String, required: true },
  path: { type: String, required: true },
  type: { type: String }, // pdf, excel, image, etc.
  size: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("File", fileSchema);
