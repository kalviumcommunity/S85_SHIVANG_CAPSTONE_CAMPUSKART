const express = require("express");
const connectDB = require("./database/db");
const app = express();
const PORT = 5000;
connectDB(); 
app.use(express.json());
app.get("/", (req, res) => {
  res.send("🚀 CampusKart Backend is running");
});
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});