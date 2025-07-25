import express from "express";
const router = express.Router();

import { 
    listarUsuarios, 
    buscarPorId, 
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    buscarPorNombreApellido
} from "../CONTROLLERS/usuariosControllers.js";

// Obtener todos los usuarios
router.get("/", listarUsuarios);

// Buscar usuario por nombre y apellido
router.get("/na", buscarPorNombreApellido);

// Obtener un usuario por ID
router.get("/:id", buscarPorId);

// Crear un nuevo usuario
router.post("/", crearUsuario);

// Actualizar un usuario por ID
router.put("/:id", modificarUsuario);

// Eliminar un usuario por ID
router.delete("/:id", eliminarUsuario);

// Buscar usuario por nombre y apellido
router.get("/na", buscarPorNombreApellido);

export default router;
