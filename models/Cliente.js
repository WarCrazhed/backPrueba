import mongoose from 'mongoose'

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: String,
        default: null,
    }
})

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;