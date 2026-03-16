const express = require("express")
const router = express.Router()

const {
    createService,
    getServices
} = require("../controllers/ServiceController")

router.post("/", createService)

router.get("/", getServices)

module.exports = router