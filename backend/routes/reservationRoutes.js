const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.get("/", reservationController.getAllReservations);

router.get("/:res_id", reservationController.getSingleReservation);

router.post("/", reservationController.addNewReservation);

router.put("/:res_id", reservationController.editReservation);

router.delete("/:res_id", reservationController.deleteReservation);

module.exports = router;