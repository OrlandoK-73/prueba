import { Router } from "express";
import SeccionController from "../controllers/seccion.controller";
const seccion = Router();

seccion.get('/seccion', SeccionController.getInstance().getAll);
seccion.get('/seccion/:id', SeccionController.getInstance().getSingle);
seccion.post('/seccion', SeccionController.getInstance().create);
seccion.put('/seccion/:id', SeccionController.getInstance().update);
seccion.delete('/seccion/:id', SeccionController.getInstance().delete);

export default seccion;