const db = require('../Config/MYSQL')

const{
    selectclientes2,
    selectcliente2,
    updatecliente2,
    insertcliente2,
    deletecliente2
} = require('../DAL/mysql_llamadas'); 

exports.getclientes = async (req,res) => {
try {
    const clientes = await selectclientes2(); 
    
    if (clientes.length === 0) {
  return res.status(404).json({ mensaje: 'No hay clientes registrados' });
    }

    res.json(clientes);                      
  } catch (error) {
    
    res.status(500).json({mensaje:"Ocurrio un error al obtener los clientes"  });
  }
}

