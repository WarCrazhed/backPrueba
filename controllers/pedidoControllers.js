import Cliente from "../models/Cliente.js"
import Pedido from "../models/Pedido.js"
import Producto from "../models/Producto.js"
import Usuario from "../models/Usuario.js"

const consultar = async (req, res) => {
    let pedidosArray = []

    const pedidos = await Pedido.find()
    const clientes = await Cliente.find()
    const usuarios = await Usuario.find()
    
    pedidos.map(pedido => {
        clientes.map(cliente => {
            usuarios.map(usuario => {
                if (cliente.id === pedido.cliente.toString()) {
                    if(usuario.id == pedido.vendedor.toString()) {
                        let objeto = {
                            nombreNegocio : cliente.nombreNegocio,
                            _id : pedido.id,
                            cliente: pedido.cliente.toString(),
                            clienteNombre: cliente.nombre,
                            clienteApellido: cliente.apellido,
                            vendedor: pedido.vendedor.toString(),
                            estado: pedido.estado,
                            nombreVendedor: usuario.nombre,
                            apellidoVendedor: usuario.apellido,
                            total: String(pedido.total)
                        }
                        pedidosArray.push(objeto)
                    }
                }
            })
        })
    })

    //console.log(pedidosArray);
    res.json(pedidosArray)
}

const registrarPedido = async (req, res) => {
    //console.log(req.body)
    req.body.id.forEach(async (i, index) => {
        const producto = await Producto.findById(i)
        //console.log(req.body.cantidad[index]);
        producto.existencia = producto.existencia-req.body.cantidad[index]
        console.log(producto.existencia);
        producto.save()
    });

    let total = 0;

    let pedido = []
    for (let i = 0; i < req.body.id.length; i++) {
        //const element = req.body.id[i];
        let productos = {
            id: req.body.id[i],
            cantidad: Number(req.body.cantidad[i]),
            nombre: req.body.nombre[i],
            precio: Number(req.body.precio[i])
        }

        total += Number(req.body.cantidad[i])*Number(req.body.precio[i])

        pedido.push(productos)
    }

    const pedidoNuevo = {
        pedido,
        total: total,
        cliente: req.body.cliente,
        vendedor: req.body.vendedor,
    }
    //console.log(pedidoNuevo);
    const pedidoBD = new Pedido(pedidoNuevo);

    try {
        const pedidoGuardado = await pedidoBD.save();
        res.json(pedidoGuardado)
    } catch (error) {
        console.log(error);
    }

}

const registrar = async (req, res) => {

    const {cliente, vendedor, id, nombre, cantidad, precio } = req.body;

    let total = Number(cantidad)*Number(precio)

    const pedidoNuevo = {
        pedido: [
            {
                id,
                cantidad: Number(cantidad),
                nombre,
                precio: Number(precio)
            }
        ],
        total,
        cliente,
        vendedor
    }
    //console.log(pedidoNuevo.pedido)

    const pedidoBD = new Pedido(pedidoNuevo);

    try {
        const pedidoGuardado = await pedidoBD.save();
        res.json(pedidoGuardado)
    } catch (error) {
        console.log(error);
    }
}

const cambiarStatus = async (req, res) => {
    //console.log(req.body);
    const { id } = req.body;
    const pedido = await Pedido.findById(id)
    //console.log(pedido);
    
    if(!pedido) {
        return res.status(404).json({msg: 'No Encontrado'});
    } 

    pedido.estado = req.body.estado || pedido.estado

    try {
        const pedidoActualizado = await pedido.save()
        res.json(pedidoActualizado)
    } catch (error) {
        console.log(error);
    }
}

const consultarProductos = async (req, res) => {
    //console.log(req.params);
    const { id } = req.params;
    const pedido = await Pedido.findById(id);

    res.json(pedido.pedido)
}

const pedidoVendedor = async (req, res) => {
    const { id } = req.params;
    const pedidos = await Pedido.find({vendedor: id})
    res.json(pedidos)
};

const eliminar = async (req,res) => {
    const { id } = req.params;
    const pedido = await Pedido.findById(id);

    if(!pedido) {
        return res.status(404).json({msg: 'No Encontrado'});
    }

    try {
        await pedido.deleteOne();
        res.json({msg: 'Pedido Eliminado'})
    } catch (error) {
        console.log(error);
    }
}

export {
    consultar,
    registrar,
    eliminar,
    pedidoVendedor,
    cambiarStatus,
    consultarProductos,
    registrarPedido
}