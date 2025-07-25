import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    foto: String,
  },
  { collection: "usuariosTabla" }
);

const Usuario = mongoose.model("usuario", usuarioSchema, "usuariosTabla");

export default Usuario;
