import express from "express";
const router = express.Router();

import { consultar, registrar, eliminar, pedidoVendedor, cambiarStatus, consultarProductos, registrarPedido } from "../controllers/pedidoControllers.js";

router.get('/', consultar)
router.post('/', registrar)
router.delete('/:id', eliminar)
router.get('/:id', pedidoVendedor)
router.post('/modificarEstado/', cambiarStatus)
router.get('/productos/:id', consultarProductos)
router.post('/registrar/',registrarPedido)

export default router;