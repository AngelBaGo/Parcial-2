const db = require('../Config/MYSQL')

const{
    selectclientes,
    selectcliente,
    updatecliente,
    insertcliente,
    deletecliente
} = require('../DAL/mysql_llamadas'); //('../dal/local'); 

exports.getclientes = async (req,res) => {
try {
    const clientes = await selectclientes(); // Recibe los datos
    res.json(clientes);                      // El controlador responde
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}