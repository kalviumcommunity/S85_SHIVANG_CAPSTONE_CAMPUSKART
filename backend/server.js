const express = require("express");
const connectDB = require("./database/db");

const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the database
connectDB();


// Import and use routes
const userRoutes = require('./Routes/userAPI');
app.use('/api/users', userRoutes);

const itemRoutes = require('./Routes/itemAPI');
app.use('/api/items', itemRoutes);

app.get("/", (req, res) => {
  res.send("🚀 CampusKart Backend is running");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});