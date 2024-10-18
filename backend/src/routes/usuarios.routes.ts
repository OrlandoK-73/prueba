import { Router } from "express";
import UsuarioController from "../controllers/usuario.controller";
const usuario = Router();

usuario.get('/usuario', UsuarioController.getInstance().getAll);
usuario.get('/usuario/:id', UsuarioController.getInstance().getSingle);
usuario.get('/usuario/rol/:rol', UsuarioController.getInstance().getAllByRol);
usuario.post('/usuario', UsuarioController.getInstance().create);
usuario.put('/usuario/:id', UsuarioController.getInstance().update);
usuario.delete('/usuario/:id', UsuarioController.getInstance().delete);
usuario.post('/login', UsuarioController.getInstance().login);
usuario.post('/usuario/changePassword/:id', UsuarioController.getInstance().changePassword);
usuario.post('/usuario/changePassword2/:id', UsuarioController.getInstance().changePassword2);

export default usuario;