const jwt = require('jsonwebtoken');
const { loginUsuario } = require('../DAL/mysql_llamadas');

exports.login = async (req, res) => {

    try {

        const { usuario, password } = req.body;

        const user = await loginUsuario(usuario);

        if (!user) {
            return res.status(401).json({
                mensaje: 'Usuario no encontrado'
            });
        }

        if (password !== user.Password) {
            return res.status(401).json({
                mensaje: 'Contraseña incorrecta'
            });
        }

        const token = jwt.sign(
            {
                id: user.IdUsuario,
                usuario: user.Usuario,
                rol: user.NombreRol
            },
            'CLAVE_SECRETA',
            { expiresIn: '1h' }
        );

        res.json({
            mensaje: 'Login correcto',
            token
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error en login'
        });

    }
};