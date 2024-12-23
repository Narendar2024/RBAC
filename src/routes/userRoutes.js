const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/roleMiddleware");
const router = express.Router();

// Only Admin can access this router
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});
// Both Admin and Manager can access this router
router.get(
  "/manager",
  verifyToken,
  authorizeRole("admin", "manager"),
  (req, res) => {
    res.json({ message: "Welcome Manager" });
  }
);
// All can access this router
router.get(
  "/user",
  verifyToken,
  authorizeRole("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "Welcome User" });
  }
);
module.exports = router;
