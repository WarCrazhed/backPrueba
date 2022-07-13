import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";

const nuevoUsuario = async (req, res) => {
    const { email, nombre, password } = req.body;

    const existeUsuario = await Usuario.findOne({email});
    if(existeUsuario) {
        const error = new Error('Usuario ya registrado');
        return res.status(400).json({ msg: error.message });
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(password, salt);

    try {
        // Guardar un Nuevo Usuario
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();

        res.json(usuarioGuardado);
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    // Comprobar si el usuario existe
    const usuario = await Usuario.findOne({email});

    if(!usuario) {
        const error = new Error('El Usuario no existe');
        return res.status(404).json({ msg: error.message });
    }

    const passwordCorrecto = await bcrypt.compare(
        password,
        usuario.password
    )

    if(!passwordCorrecto) {
        const error = new Error('El password es incorrecto');
        return res.status(403).json({ msg: error.message });
    }

    res.json(usuario);
}

export {
    nuevoUsuario, login
}