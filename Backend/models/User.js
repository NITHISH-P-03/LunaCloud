


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  country: { type: String, default: "" },
  usedStorage: { type: Number, default: 0 }, // track total uploaded bytes
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
