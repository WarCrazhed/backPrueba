import express from "express";
const router = express.Router();
import { registrar, consultar, actualizarInventario } from "../controllers/productoControllers.js";

router.post('/', registrar)
router.get('/', consultar)
router.put('/actualizarInventario/', actualizarInventario)

export default router;