import express from "express";
const router = express.Router();
import { nuevoUsuario, login } from "../controllers/usuarioControllers.js";

router.post('/', nuevoUsuario);
router.post('/login', login)

export default router;