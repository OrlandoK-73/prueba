import { Router } from "express";
import TareaController from "../controllers/tarea.controller";
const tarea = Router();

tarea.get('/tarea', TareaController.getInstance().getAll);
tarea.get('/tarea/:id', TareaController.getInstance().getSingle);
tarea.get('/tarea/asignacion/:id', TareaController.getInstance().getTareasPorAsignacion);
tarea.post('/tarea', TareaController.getInstance().create);
tarea.put('/tarea/:id', TareaController.getInstance().update);
tarea.delete('/tarea/:id', TareaController.getInstance().delete);

export default tarea;