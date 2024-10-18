import { Router } from "express";
import GradoController from "../controllers/grado.controller";
const grado = Router();

grado.get('/grado', GradoController.getInstance().getAll);
grado.get('/grado/:id', GradoController.getInstance().getSingle);
grado.post('/grado', GradoController.getInstance().create);
grado.put('/grado/:id', GradoController.getInstance().update);
grado.delete('/grado/:id', GradoController.getInstance().delete);

export default grado;