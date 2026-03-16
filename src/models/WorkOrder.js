const mongoose = require("mongoose")

const workOrderSchema = new mongoose.Schema({

    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },

    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
        }
    ],

    status: {
        type: String,
        enum: ["pendiente", "en_proceso", "terminado"],
        default: "pendiente"
    },

    total: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("WorkOrder", workOrderSchema)