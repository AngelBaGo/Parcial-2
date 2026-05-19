const { getPool } = require('../Config/MYSQL');

exports.selectclientes2 = async () => {
     const pool = getPool();
 const result = await pool.request().query('select * from dbo.cliente');
  return result.recordset; // Solo retorna los datos, sin tocar res
};

exports.loginUsuario = async (usuario) => {

    const pool = getPool();

    const result = await pool.request()
        .input('usuario', usuario)
        .query(`
            SELECT 
                U.IdUsuario,
                U.Usuario,
                U.Password,
                R.NombreRol
            FROM Usuarios U
            INNER JOIN Roles R
            ON U.IdRol = R.IdRol
            WHERE U.Usuario = @usuario
        `);

    return result.recordset[0];
};