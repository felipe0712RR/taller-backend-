const express = require("express")
const router = express.Router()

const {
    createWorkOrder,
    getWorkOrders,
    updateWorkOrderStatus
} = require("../controllers/WorkOrderController")

router.post("/", createWorkOrder)

router.get("/", getWorkOrders)

router.put("/:id/status", updateWorkOrderStatus)

module.exports = router