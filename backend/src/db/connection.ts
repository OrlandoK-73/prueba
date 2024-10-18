import { Sequelize } from 'sequelize';

const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: ".env." + NODE_ENV
});

// Verificar las variables de entorno
const dbName = process.env.DB_DATABASE;
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

if (!dbName || !dbUser || !dbPassword) {
    throw new Error('Missing database configuration in environment variables.');
}

const db = new Sequelize(
    dbName,   // Nombre de la base de datos
    dbUser,   // Usuario de la base de datos
    dbPassword, // Contraseña de la base de datos
    {
        host: process.env.DB_HOST,    // Host (nombre del servicio en docker-compose)
        port: Number(process.env.DB_PORT) || 5432, // Puerto (5432 para PostgreSQL)
        dialect: 'postgres',          // Dialecto de la base de datos
        logging: console.log,         // Habilitar logging para depuración
        timezone: '-06:00',           // Configura la zona horaria según sea necesario
    }
);

// Probar la conexión
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default db;
