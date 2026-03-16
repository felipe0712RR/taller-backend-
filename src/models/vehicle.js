const mongoose = require("mongoose")

const VehicleSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    year: {
        type: Number
    },

    plate: {
        type: String,
        required: true,
        unique: true
    },

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    }

})

module.exports = mongoose.model("Vehicle", VehicleSchema)