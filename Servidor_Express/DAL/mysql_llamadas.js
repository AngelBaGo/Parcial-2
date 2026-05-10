const { getPool } = require('../Config/MYSQL');

exports.selectclientes = async () => {
     const pool = getPool();
 const result = await pool.request().query('select * from dbo.cliente');
  return result.recordset; // Solo retorna los datos, sin tocar res
};