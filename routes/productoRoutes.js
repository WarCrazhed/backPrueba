import express from "express";
const router = express.Router();
import { registrar, consultar } from "../controllers/productoControllers.js";

router.post('/', registrar)
router.get('/', consultar)

export default router;