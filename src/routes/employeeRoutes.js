const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")

const {
    createEmployee,
    loginEmployee
} = require("../controllers/employeeController")

router.post("/", createEmployee)

router.post("/login", loginEmployee)

router.get("/profile", authMiddleware, (req, res) => {

    res.json({
        message: "Ruta protegida",
        employeeId: req.employeeId
    })

})

module.exports = router