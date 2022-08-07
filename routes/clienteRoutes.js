import express from "express";
const router = express.Router();
import { registrar, consultar, consultarCliente, actualizarCliente, eliminarCliente, clientesVendedor } from "../controllers/clienteControllers.js";

router.post('/', registrar)
router.get('/', consultar)
router.get('/cliente/:id', consultarCliente)
router.post('/modificar/', actualizarCliente)
//router.post('/:id', actualizarCliente)
router.delete('/:id', eliminarCliente)
router.get('/:id', clientesVendedor)

export default router;