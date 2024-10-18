import { Router } from "express";
import AsignacionEstudianteController from "../controllers/asignacion_estudiante.controller";
const asignacion_estudiante = Router();

asignacion_estudiante.get('/asignacion_estudiante', AsignacionEstudianteController.getInstance().getAll);
asignacion_estudiante.get('/asignacion_estudiante/estudiante/:gradoId/:seccionId/:anio', AsignacionEstudianteController.getInstance().getAllEstudiantes);
asignacion_estudiante.get('/asignacion_estudiante/:id', AsignacionEstudianteController.getInstance().getSingle);
asignacion_estudiante.post('/asignacion_estudiante', AsignacionEstudianteController.getInstance().create);
asignacion_estudiante.put('/asignacion_estudiante/:id', AsignacionEstudianteController.getInstance().update);
asignacion_estudiante.delete('/asignacion_estudiante/:id', AsignacionEstudianteController.getInstance().delete);

export default asignacion_estudiante;