import { Router } from "express";
import PreguntaController from "../controllers/pregunta.controller";
const pregunta = Router();

pregunta.get('/pregunta', PreguntaController.getInstance().getAll);
pregunta.get('/pregunta/tarea/:id', PreguntaController.getInstance().getAllPorTarea);
pregunta.get('/pregunta/:id', PreguntaController.getInstance().getSingle);
pregunta.post('/pregunta', PreguntaController.getInstance().create);
pregunta.put('/pregunta/:id', PreguntaController.getInstance().update);
pregunta.delete('/pregunta/:id', PreguntaController.getInstance().delete);

export default pregunta;