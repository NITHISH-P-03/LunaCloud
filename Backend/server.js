const express = require("express");
const connect_db = require("./config/db.js");
const cors = require("cors");
const fileRoutes = require("./routes/fileRoutes.js");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Connect DB
connect_db();

// Routes
app.use("/api/files", fileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("<h1>HI</h1>");
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
