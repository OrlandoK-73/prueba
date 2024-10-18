import express = require('express');
import path = require('path');
import db from '../db/connection';
import usuario from '../routes/usuarios.routes';
import grado from '../routes/grado.routes';
import seccion from '../routes/seccion.routes';
import curso from '../routes/curso.routes';
import asignacion_maestro from '../routes/asignacion_maestro.routes';
import asignacion_estudiante from '../routes/asignacion_estudiante.routes';
import asistencia from '../routes/asistencia.routes';
import tarea from '../routes/tarea.routes';
import pregunta from '../routes/pregunta.routes';
import tarea_estudiante from '../routes/tarea_estudiante.routes';
const bodyParser = require('body-parser');

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        /**
         * HEADEARS & CORS
         */
        this.app.use((req: any, res: any, next: any) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
            if (req.methods == "OPTIONS") {
                res.sendStatus(200);
            } else {
                next();
            }
        });

        // LECTURA DEL BODY
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ limit: '100mb', extended: true }));

        // CARPETA PUBLICA
        this.publicFolder();
    }

    /**
     * CONEXION MYSQL
     */
    async dbConnection() {
        try {
            await db.authenticate();
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * CARPETA PUBLICA
     */
    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    /**
     * RUTAS
     */
    routes() {
        const api: string = "/api/"
        this.app.use(api, usuario);
        this.app.use(api, grado);
        this.app.use(api, seccion);
        this.app.use(api, curso);
        this.app.use(api, asignacion_maestro);
        this.app.use(api, asignacion_estudiante);
        this.app.use(api, asistencia);
        this.app.use(api, tarea);
        this.app.use(api, pregunta);
        this.app.use(api, tarea_estudiante);
    }

    /**
     * LISTEN PORT
     */
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }

}