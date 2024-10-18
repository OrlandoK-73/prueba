import { Router } from "express";
import AsistenciaController from "../controllers/asistencia.controller";
const asistencia = Router();

asistencia.get('/asistencia', AsistenciaController.getInstance().getAll);
asistencia.get('/asistencia/:id', AsistenciaController.getInstance().getSingle);
asistencia.get('/asistencia/estudiante/:asignacionMaestroId/:estudianteId', AsistenciaController.getInstance().getAllAsistenciasPorEstudiante);
asistencia.post('/asistencia', AsistenciaController.getInstance().create);
asistencia.put('/asistencia/:id', AsistenciaController.getInstance().update);
asistencia.delete('/asistencia/:id', AsistenciaController.getInstance().delete);

export default asistencia;