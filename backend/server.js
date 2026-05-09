const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (ADD THIS 👇)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/user", require("./routes/userRoutes"))

const adminRoutes = require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(5000, () => {
      console.log(" Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed:", err.message);
  });