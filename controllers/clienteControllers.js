import Cliente from '../models/Cliente.js'

const registrar = async(req, res) => {
/*     console.log(req.body);
    return; */
    const cliente = new Cliente(req.body);

    try {
        const clienteGuardado = await cliente.save();
        res.json(clienteGuardado)
    } catch (error) {
        console.log(error);
    }
};

const consultar = async (req, res) => {
    const clientes = await Cliente.find()

    res.json(clientes)
};

const clientesVendedor = async (req, res) => {
    const { id } = req.params;
    const clientes = await Cliente.find({vendedor: id})
    res.json(clientes)
};

const consultarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);

    res.json(cliente)
};

const actualizarCliente = async (req, res) => {
    //const { id } = req.params;
    console.log(req.body);

    const { _id } = req.body;

    const cliente = await Cliente.findById(_id);

    if(!cliente) {
        return res.status(404).json({msg: 'No Encontrado'});
    }
    cliente.nombre = req.body.nombre || cliente.nombre
    cliente.apellido = req.body.apellido || cliente.apellido
    cliente.telefono = req.body.telefono || cliente.telefono
    cliente.direccion = req.body.direccion || cliente.direccion
    cliente.nombreNegocio = req.body.nombreNegocio || cliente.nombreNegocio
    cliente.email = req.body.email || cliente.email
    cliente.genero = req.body.genero || cliente.genero
    cliente.vendedor = req.body.vendedor || cliente.vendedor

    try {
        const clienteActualizado = await cliente.save();
        res.json(clienteActualizado)
    } catch (error) {
        console.log(error);
    }
}

const eliminarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);

    if(!cliente) {
        return res.status(404).json({msg: 'No Encontrado'});
    }

    try {
        await cliente.deleteOne();
        res.json({msg: 'Cliente Eliminado'})
    } catch (error) {
        console.log(error);
    }
}

export {
    registrar,
    consultar,
    consultarCliente,
    actualizarCliente,
    eliminarCliente,
    clientesVendedor
}