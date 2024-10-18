import { Router } from "express";
import ProductoTipoController from "../controllers/producto-tipo.controller";
const producto_tipo = Router();

producto_tipo.get('/producto_tipo', ProductoTipoController.getInstance().getAll);
producto_tipo.get('/producto_tipo/:id', ProductoTipoController.getInstance().getSingle);
producto_tipo.post('/producto_tipo', ProductoTipoController.getInstance().create);
producto_tipo.put('/producto_tipo/:id', ProductoTipoController.getInstance().update);
producto_tipo.delete('/producto_tipo/:id', ProductoTipoController.getInstance().delete);

export default producto_tipo;