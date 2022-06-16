import Cliente from '../models/Cliente.js'

const registrar = async(req, res) => {
    try {
        const cliente = new Cliente(req.body);
        const clienteGuardado = await cliente.save();
    } catch (error) {
        console.log(error);
    }
};

const consultar = async (req, res) => {
    const clientes = await Cliente.find()

    res.json(clientes)
};
const consultarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findById(id);

    res.json(cliente)
};

export {
    registrar,
    consultar,
    consultarCliente
}