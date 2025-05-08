// server.js
const express = require("express");
const connectDB = require("./database/db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Routes
const userRoutes = require('./Routes/userAPI');
app.use('/api/users', userRoutes);

const itemRoutes = require('./Routes/itemAPI');
app.use('/api/items', itemRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🚀 CampusKart Backend is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
