import { Router } from "express";
import AsignacionMaestroController from "../controllers/asignacion_maestro.controller";
const asignacion_maestro = Router();

asignacion_maestro.get('/asignacion_maestro', AsignacionMaestroController.getInstance().getAll);
asignacion_maestro.get('/asignacion_maestro/:id', AsignacionMaestroController.getInstance().getSingle);
asignacion_maestro.get('/asignacion_maestro/maestro/:id', AsignacionMaestroController.getInstance().getAllPorMaestro);
asignacion_maestro.post('/asignacion_maestro', AsignacionMaestroController.getInstance().create);
asignacion_maestro.put('/asignacion_maestro/:id', AsignacionMaestroController.getInstance().update);
asignacion_maestro.delete('/asignacion_maestro/:id', AsignacionMaestroController.getInstance().delete);

export default asignacion_maestro;