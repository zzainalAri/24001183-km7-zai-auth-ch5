const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController"); // Corrected import
const { auth, checkRole } = require("../middlewares/auth");

// Public routes
router.post("/login", UserController.login);
router.post("/register", UserController.register);

// Protected routes
router.get("/me", auth, UserController.getCurrentUser);

// Superadmin only routes
router.post(
  "/admin",
  auth,
  checkRole("superadmin"),
  UserController.createAdmin
);

module.exports = router;
