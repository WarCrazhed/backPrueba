import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import clienteRoutes from "./routes/clienteRoutes.js"

const app = express();
app.use(express.json())
dotenv.config()

conectarDB();

app.use('/api/clientes', clienteRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('Corriendo en el puerto', PORT);
})