const express = require("express")
const router = express.Router()

const {
    createEmployee,
    loginEmployee
} = require("../controllers/employeeController")

router.post("/", createEmployee)

router.post("/login", loginEmployee)

module.exports = router