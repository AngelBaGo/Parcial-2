const express = require('express');
const router = express.Router();
const{
    getclientes,
    getcliente,
    editcliente,
    createcliente,
    deletecliente
} = require('../Controlador/Controlador_Cliente');

router.get('/',getclientes);


module.exports = router;
