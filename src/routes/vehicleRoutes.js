const express = require("express")
const router = express.Router()

const {
    createVehicle,
    getVehicles
} = require("../controllers/VehicleController")

router.post("/", createVehicle)

router.get("/", getVehicles)

module.exports = router