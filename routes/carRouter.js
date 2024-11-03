const express = require("express");
const router = express.Router();
const CarController = require("../controllers/carController"); // Corrected import
const { auth, checkRole } = require("../middlewares/auth");

// Public routes
router.get("/", CarController.getAllCars);
router.get("/:id", CarController.getCarById);

// Protected routes (admin & superadmin only)
router.post(
  "/",
  auth,
  checkRole("admin", "superadmin"),
  CarController.createCar
);
router.put(
  "/:id",
  auth,
  checkRole("admin", "superadmin"),
  CarController.updateCar
);
router.delete(
  "/:id",
  auth,
  checkRole("admin", "superadmin"),
  CarController.deleteCar
);

module.exports = router;
