import mongoose from 'mongoose'

const clienteSchema = mongoose.Schema({
    nombre: {
        type: "string",
        required: true,
        trim: true,
    },
    apellido: {
        type: "string",
        trim: true,
    },
    telefono: {
        type: "string",
        trim: true,
        unique: true,
        required: true,
    },
    direccion: {
        type: "string",
        trim: true,
        required: true,
    },
    nombreNegocio: {
        type: "string",
        required: true,
        trim: true,
    },
    email: {
        type: "string",
        trim: true,
    },
    genero: {
        type: "string",
        required: true,
        trim: true,
    },
    creado: {
        type: Date,
        default: Date.now(),
    },
    vendedor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Usuario",
    },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;