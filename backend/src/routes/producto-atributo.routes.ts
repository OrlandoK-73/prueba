import { Router } from "express";
import ProductoAtributoController from "../controllers/producto-atributo.controller";
const producto_atributo = Router();

producto_atributo.get('/producto_atributo', ProductoAtributoController.getInstance().getAll);
producto_atributo.get('/producto_atributo/:id', ProductoAtributoController.getInstance().getSingle);
producto_atributo.post('/producto_atributo', ProductoAtributoController.getInstance().create);
producto_atributo.put('/producto_atributo/:id', ProductoAtributoController.getInstance().update);
producto_atributo.delete('/producto_atributo/:id', ProductoAtributoController.getInstance().delete);

export default producto_atributo;