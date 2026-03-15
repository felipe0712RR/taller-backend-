const Employee = require("../models/employee")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// REGISTRAR EMPLEADO
exports.createEmployee = async (req, res) => {

    try {

        const { name, email, password, role } = req.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const employee = new Employee({
            name,
            email,
            password: hashedPassword,
            role
        })

        await employee.save()

        res.status(201).json(employee)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}


// LOGIN
exports.loginEmployee = async (req, res) => {

    try {

        const { email, password } = req.body

        const employee = await Employee.findOne({ email })

        if (!employee) {
            return res.status(400).json({ message: "Empleado no encontrado" })
        }

        const isMatch = await bcrypt.compare(password, employee.password)

        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" })
        }

        const token = jwt.sign(
            { id: employee._id },
            process.env.JWT_SECRET,
            { expiresIn: "8h" }
        )

        res.json({
            message: "Login exitoso",
            token
        })

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

}