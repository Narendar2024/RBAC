const express = require("express");
const dotEnv = require("dotenv");
const app = express();
dotEnv.config();
const PORT = process.env.PORT || 5001;
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
