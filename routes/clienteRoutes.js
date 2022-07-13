import express from "express";
const router = express.Router();
import { registrar, consultar, consultarCliente, actualizarCliente, eliminarCliente, clientesVendedor } from "../controllers/clienteControllers.js";

router.post('/', registrar)
router.get('/', consultar)
//router.get('/:id', consultarCliente)
router.post('/:id', actualizarCliente)
router.delete('/:id', eliminarCliente)
router.get('/:id', clientesVendedor)

export default router;