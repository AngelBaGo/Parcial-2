const { getPool } = require('../Config/MYSQL');

exports.selectclientes2 = async () => {
     const pool = getPool();
 const result = await pool.request().query('select * from dbo.cliente');
  return result.recordset; // Solo retorna los datos, sin tocar res
};

exports.insertcliente2 = async (
    ID_CLIENTE,
    nombre,
    apellido,
    sexo,
    direccion,
    telefono,
    fnacimiento,
    idUbicacion
) => {

    const pool = getPool();

    const result = await pool.request()
        .input('ID_CLIENTE', ID_CLIENTE)
        .input('nombre', nombre)
        .input('apellido', apellido)
        .input('sexo', sexo)
        .input('direccion', direccion)
        .input('telefono', telefono)
        .input('fnacimiento', fnacimiento)
        .input('idUbicacion', idUbicacion)
        .query(`
            INSERT INTO cliente
            (
                ID_CLIENTE,
                NOMBRE,
                APELLIDO,
                SEXO,
                DIRECCION,
                TELEFONO,
                FNACIMIENTO,
                IDUBICACION
            )
            VALUES
            (
                @ID_CLIENTE,
                @nombre,
                @apellido,
                @sexo,
                @direccion,
                @telefono,
                @fnacimiento,
                @idUbicacion
            )
        `);

    return result;
};


exports.deletecliente2 = async (idCliente) => {

    const pool = getPool();

    const result = await pool.request()
        .input('idCliente', idCliente)
        .query(`
            DELETE FROM cliente
            WHERE ID_CLIENTE = @idCliente
        `);

    return result.rowsAffected[0];
};




exports.loginUsuario = async (usuario) => {

    const pool = getPool();

    const result = await pool.request()
        .input('usuario', usuario)
        .query(`
            SELECT 
                U.IdUsuario,
                U.Usuario,
                U.contrasena,
                R.NombreRol
            FROM Usuarios U
            INNER JOIN Roles R
            ON U.IdRol = R.IdRol
            WHERE U.Usuario = @usuario
        `);

    return result.recordset[0];
};