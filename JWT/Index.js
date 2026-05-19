const express = require('express');
const app = express();
const { connectDB } = require('./Config/MYSQL');
app.use(express.json());

const VentasCliente = require('./Rutas/Rutas_Obtener');
app.use('/api/clientes',VentasCliente);



connectDB().then(() => {
  app.listen(3000, () => console.log('Servidor en puerto 3000'));
});