import Usuario from "../MODELS/usuariosModel.js";
import usuariosSemilla from "../MODELS/usuariosSemilla.js";

export async function insertarSemillaDB() {
  try {
    const count = await Usuario.countDocuments();
    if (count === 0) {
      await Usuario.insertMany(usuariosSemilla);
      console.log("Usuarios base insertados en la base de datos");
    }
  } catch (error) {
    console.error("Error al insertar usuarios de semilla:", error);
  }
}
