const Vehicle = require("../models/vehicle")

exports.createVehicle = async (req, res) => {

    try {

        const vehicle = new Vehicle(req.body)

        await vehicle.save()

        res.status(201).json(vehicle)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}


exports.getVehicles = async (req, res) => {

    try {

        const vehicles = await Vehicle.find().populate("client")

        res.json(vehicles)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}