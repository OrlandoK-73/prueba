import Server from "./server/server";
const NODE_ENV = process.env.NODE_ENV || 'development'
require('dotenv').config({
    path: ".env." + NODE_ENV
})

/**
 * CONFIGURACIÓN DE SERVIDOR
 */
let port = parseInt(process.env.PORT as string, 10) || 3000;
const server = new Server(port);

/**
 * LEVANTAR SERVER
 */
server.listen();