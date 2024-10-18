import { Router } from "express";
import TareaEstudianteController from "../controllers/tarea_estudiante.controller";
const tarea_estudiante = Router();

tarea_estudiante.get('/tarea_estudiante', TareaEstudianteController.getInstance().getAll);
tarea_estudiante.get('/tarea_estudiante/:id', TareaEstudianteController.getInstance().getSingle);
tarea_estudiante.get('/tarea_estudiante/notas/:estudianteId/:asignacionMaestroId', TareaEstudianteController.getInstance().getNotasTareasPorEstudiante);
tarea_estudiante.get('/tarea_estudiante/notas_generales/:estudianteId', TareaEstudianteController.getInstance().getNotasPorEstudiante);
tarea_estudiante.post('/tarea_estudiante', TareaEstudianteController.getInstance().create);
tarea_estudiante.put('/tarea_estudiante/:id', TareaEstudianteController.getInstance().update);
tarea_estudiante.delete('/tarea_estudiante/:id', TareaEstudianteController.getInstance().delete);

export default tarea_estudiante;