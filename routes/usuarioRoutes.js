import express from "express";
const router = express.Router();
import { nuevoUsuario, login, consultar } from "../controllers/usuarioControllers.js";

router.get('/', consultar)
router.post('/', nuevoUsuario);
router.post('/login', login)

export default router;