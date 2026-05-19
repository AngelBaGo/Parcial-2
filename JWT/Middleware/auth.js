const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {

    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        return res.status(403).json({
            mensaje: 'Token requerido'
        });
    }

    const token = bearerHeader.split(' ')[1];

    jwt.verify(token, 'CLAVE_SECRETA', (err, authData) => {

        if (err) {
            return res.status(403).json({
                mensaje: 'Token inválido'
            });
        }

        req.usuario = authData;

        next();
    });
}

module.exports = verificarToken;