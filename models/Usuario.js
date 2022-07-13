import mongoose from 'mongoose'

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: "string",
        required: true,
        trim: true,
      },
      apellido: {
        type: "string",
        required: true,
        trim: true,
      },
      genero: {
        type: "string",
        required: true,
        trim: true,
      },
      email: {
        type: "string",
        required: true,
        trim: true,
        unique: true,
      },
      password: {
        type: "string",
        required: true,
        trim: true,
        unique: true,
      },
      perfil: {
        type: "string",
        trim: true,
      },
      creado: {
        type: Date,
        default: Date.now(),
      },
    });

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;