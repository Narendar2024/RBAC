const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      `Database Connection: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (error) {
    console.log("Error Connecting to the database:", error.message);
    process.exit(1);
  }
};
module.exports = dbConnect;
