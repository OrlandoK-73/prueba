import { Router } from "express";
import ProductoAtributoValorController from "../controllers/producto-atributo-valor.controller";
const producto_atributo_valor = Router();

producto_atributo_valor.get('/producto_atributo_valor', ProductoAtributoValorController.getInstance().getAll);
producto_atributo_valor.get('/producto_atributo_valor/:id', ProductoAtributoValorController.getInstance().getSingle);
producto_atributo_valor.post('/producto_atributo_valor', ProductoAtributoValorController.getInstance().create);
producto_atributo_valor.put('/producto_atributo_valor/:id', ProductoAtributoValorController.getInstance().update);
producto_atributo_valor.delete('/producto_atributo_valor/:id', ProductoAtributoValorController.getInstance().delete);

export default producto_atributo_valor;