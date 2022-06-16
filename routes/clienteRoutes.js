import express from "express";
const router = express.Router();
import { registrar, consultar, consultarCliente } from "../controllers/clienteControllers.js";

router.post('/', registrar)
router.get('/', consultar)
router.get('/:id', consultarCliente)

export default router;