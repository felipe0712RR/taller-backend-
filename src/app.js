const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const connectDB = require("./config/db")
const employeeRoutes = require("./routes/employeeRoutes")

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/employees", employeeRoutes)


app.get("/", (req, res) => {
    res.send("API Taller funcionando")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

console.log(process.env.MONGO_URI)