import mongoose from 'mongoose'

const productoSchema = mongoose.Schema({
    nombre: {
        type: "string",
        required: true,
        trim: true,
      },
      presentacion: {
        type: "string",
        trim: true,
      },
      existencia: {
        type: Number,
        required: true,
        trim: true,
      },
      existenciaDeseada: {
        type: Number,
        required: true,
        trim: true,
      },
      precio: {
        type: Number,
        required: true,
        trim: true,
      },
      tipoProducto: {
        type: "string",
        required: true,
        trim: true,
      },
      creado: {
        type: Date,
        default: Date.now(),
      },
    });
    
    productoSchema.index({ nombre: "text" });

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;