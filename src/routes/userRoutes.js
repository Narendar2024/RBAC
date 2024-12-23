const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

// Only Admin can access this router
router.get("/admin", verifyToken, (req, res) => {
  res.json({ message: "Welcome Admin" });
});
// Both Admin and Manager can access this router
router.get("/manager", verifyToken, (req, res) => {
  res.json({ message: "Welcome Manager" });
});
// All can access this router
router.get("/user", verifyToken, (req, res) => {
  res.json({ message: "Welcome User" });
});
module.exports = router;
