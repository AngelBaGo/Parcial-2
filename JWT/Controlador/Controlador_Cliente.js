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

exports.createcliente = async (req, res) => {

    try {

        const {
            ID_CLIENTE,
            nombre,
            apellido,
            sexo,
            direccion,
            telefono,
            fnacimiento,
            idUbicacion
        } = req.body;

        await insertcliente2(
            ID_CLIENTE,
            nombre,
            apellido,
            sexo,
            direccion,
            telefono,
            fnacimiento,
            idUbicacion
        );

        res.status(201).json({
            mensaje: 'Cliente agregado correctamente'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

exports.deletecliente = async (req, res) => {

    try {

        const { id } = req.params;

        const filas = await deletecliente2(id);

        if (filas === 0) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Cliente eliminado correctamente'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

exports.editcliente = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nombre,
            apellido,
            sexo,
            direccion,
            telefono,
            fnacimiento,
            idUbicacion
        } = req.body;

        const filas = await updatecliente2(
            id,
            nombre,
            apellido,
            sexo,
            direccion,
            telefono,
            fnacimiento,
            idUbicacion
        );

        if (filas === 0) {
            return res.status(404).json({
                mensaje: 'Cliente no encontrado'
            });
        }

        res.status(200).json({
            mensaje: 'Cliente actualizado correctamente'
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};