const sql = require ('mssql');

const path = require('path');


const config = {
  user: 'sa',
  password: 'Admin123!',
  server: '127.0.0.1', 
  database: 'lab5',
  port: 21944,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

let pool;

const connectDB = async () => {
  try {
    pool = await sql.connect(config); 
    console.log("Conexion correcta");
  } catch (error) {
    console.error("Error al conectar");
    process.exit(1);
  }
};

const getPool = () => {
  if (!pool) throw new Error("No hay conexión a la base de datos");
  return pool;
};

module.exports = { connectDB, getPool };
