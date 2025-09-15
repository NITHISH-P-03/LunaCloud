


require("dotenv").config();
const express = require("express");
const path = require("path");
const connect_db = require("./config/db.js");

const fileRoutes = require("./routes/fileRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folders
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
connect_db();

// Routes
app.use("/api/files", fileRoutes);
app.use("/api/auth", authRoutes);


app.use("/api/users", userRoutes);


// Test root route
app.get("/", (req, res) => {
  res.send("<h1>HI</h1>");
});

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
