const express = require("express");
const dotEnv = require("dotenv");
const app = express();
dotEnv.config();
const PORT = process.env.PORT || 5001;
const dbConnect = require("./config/dbConnect");

dbConnect();

// Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
