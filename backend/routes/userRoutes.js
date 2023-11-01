const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);

router.get("/:res_id", userController.getSingleUser);

router.post("/", userController.addNewUser);

router.put("/:res_id", userController.editUser);

router.delete("/:res_id", userController.deleteUser);

module.exports = router;