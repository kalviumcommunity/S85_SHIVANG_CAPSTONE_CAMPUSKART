const mongoose = require("mongoose");
require("dotenv").config({ path: './config/.env'});
const connectDB = async () => {
  try { await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected");
  } catch (err) {console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};
module.exports = connectDB;