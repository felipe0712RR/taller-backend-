const WorkOrder = require("../models/WorkOrder");
const Service = require("../models/Service");

exports.createWorkOrder = async (req, res) => {

    try {

        const { vehicle, services } = req.body

        const serviceDocs = await Service.find({
            _id: { $in: services }
        })
        

        let total = 0

        serviceDocs.forEach(service => {
            total += service.price
        })

        const order = new WorkOrder({
            vehicle,
            services,
            total
        })

        await order.save()

        res.status(201).json(order)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}

exports.getWorkOrders = async (req, res) => {

    try {

        const orders = await WorkOrder.find()
            .populate("services")
            .populate({
                path: "vehicle",
                populate: { path: "client" }
            })

        res.json(orders)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}

exports.updateWorkOrderStatus = async (req, res) => {

    try {

        const { status } = req.body

        const order = await WorkOrder.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        )

        res.json(order)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}