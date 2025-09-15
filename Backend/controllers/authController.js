
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "change_this_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// Registration controller
exports.register = async (req, res) => {
  try {
    const { username, email, password, country } = req.body;

    // Check required fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // Check if email already in use
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered." });
    }

    // Generate salt and hash password (always convert password to string)
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(String(password), salt);

    // Create user
    const user = new User({ username, email, password: hashed, country });
    console.log(user);
    await user.save();

    // Create JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    // Response - send user and token
    res.status(201).json({
      message: "User registered",
      user: { id: user._id, username: user.username, email: user.email, country: user.country },
      token,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing credentials" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(String(password), user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.json({
      message: "Logged in",
      user: { id: user._id, username: user.username, email: user.email, country: user.country },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
