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

export {
    registrar, consultar
}