import express from "express";
import usuarioRoutes from "./usuarioRoutes.js";

const router = express.Router();

// Aquí se agrupan las rutas de la API
router.use("/usuarios", usuarioRoutes);

export default router;
