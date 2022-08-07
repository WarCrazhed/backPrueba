import Producto from "../models/Producto.js";

const registrar = async (req, res) => {
    const producto = new Producto(req.body)

    try {
        const productoGuarado = await producto.save();
        res.json(productoGuarado)
    } catch (error) {
        console.log(error);
    }
}

const consultar = async (req, res) => {
    const productos = await Producto.find()

    res.json(productos)
}

const actualizarInventario = async (req, res) => {
    const { _id } = req.body;
    const producto = await Producto.findById(_id)

    if(!producto) {
        return res.json({msg: 'No encontrado'})
    }

    // Actualizar Inventario
    producto.existencia = req.body.existencia || producto.existencia;

    try {
        const productoActualizado = await producto.save();
        res.json(productoActualizado)
    } catch (error) {
        console.log(error);
    }
}

export {
    registrar, consultar, actualizarInventario
}