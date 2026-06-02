const express = require('express');
const router = express.Router();
const{
    getclientes,
    getcliente,
    editcliente,
    createcliente,
    deletecliente
} = require('../Controlador/Controlador_Cliente');

const{
    login
} = require('../Controlador/Controlador_login');



const verificarToken = require('../Middleware/auth');

router.post('/login', login);

router.get('/clientes', verificarToken, getclientes);


router.get('/',getclientes);


router.post('/agregarCliente',createcliente);

router.delete('/eliminarCliente/:id',deletecliente);


module.exports = router;
