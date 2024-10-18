import { Request, Response } from 'express';
import Usuario from '../models/usuario.model';
const bcrypt = require('bcrypt');

export default class UsuarioController {
    private static _instance: UsuarioController;

    constructor() {
    }

    public static getInstance() {
        return this._instance || (this._instance = new this());
    }

    /**
     * OBTENER TODO EL MODELO
     */
    getAll = async (req: Request, res: Response) => {
        const data = await Usuario.findAll();

        res.json(data);
        
    }


    /**
     * OBTENER TODO EL MODELO
     */
    getAllByRol = async (req: Request, res: Response) => {
        const { rol } = req.params;

        const data = await Usuario.findAll({
            where: {
                rol: rol
            }
        });

        res.json(data);
        
    }

    /**
     * OBTENER MODELO
     */
    getSingle = async (req: Request, res: Response) => {
        const { id } = req.params;

        const data = await Usuario.findByPk(id, {
            attributes: {
                exclude: ['password']
            }
        });

        if (data) {
            res.json(data);
        } else {
            res.status(404).json({
                ok: false,
                status: 404,
                error: 'Usuario no encontrado.'
            })
        }
    }

    /**
     * REGISTRAR MODELO
     */
    create = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const existeEmail = await Usuario.findOne({
                where: {
                    email: body.email
                }
            });

            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    error: 'Ya existe un usuario con el email: ' + body.email
                })
            }

            // ENCRIPTAR CONTRASENA
            body.password = bcrypt.hashSync(body.password, 10);

            const data: any = Usuario.build(body);
            await data.save();
            res.json(data);
        } catch (error: any) {
            res.status(500).json({
                ok: false,
                status: 500,
                data: 'Ha ocurrido un error. Contacte al desarrollador backend.',
                error: JSON.stringify(error)
            })
        }
    }

    /**
     * ACTUALIZAR MODELO
     */
    update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { body } = req;

        try {
            const data = await Usuario.findByPk(id);

            if (data) {
                await data.update({
                    nombres: body.nombres,
                    apellidos: body.apellidos,
                    email: body.email,
                    rol: body.rol,
                });
                res.json(data);
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    error: 'Usuario no encontrado.'
                })
            }
        } catch (error: any) {
            res.status(500).json({
                ok: false,
                status: 500,
                data: 'Ha ocurrido un error. Contacte al desarrollador backend.',
                error: JSON.stringify(error)
            })
        }
    }

    /**
     * ELIMINAR MODELO
     */
    delete = async (req: Request, res: Response) => {
        const { id } = req.params;

        const data = await Usuario.findByPk(id);
        if (data) {
            await data.destroy();
            res.json(data);
        } else {
            res.status(404).json({
                ok: false,
                status: 404,
                error: 'Usuario no encontrado.'
            });
        }
    }

    /**
     * CAMBIO DE CONTRASEÑA
     */
    login = async (req: Request, res: Response) => {
        const { body } = req;

        try {
            const existeCorreo = await Usuario.findOne({
                where: {
                    email: body.email
                },
            });

            if (existeCorreo) {
                let usuario = JSON.parse(JSON.stringify(existeCorreo));

                if (!bcrypt.compareSync(body.password, usuario.password)) {
                    return res.status(400).json({
                        ok: false,
                        status: 400,
                        error: 'Usuario o contraseña incorrectos.'
                    })
                } else {
                    delete usuario.password;
                    return res.json(usuario);
                }
            } else {
                return res.status(400).json({
                    ok: false,
                    status: 400,
                    error: 'Usuario o contraseña incorrectos.'
                });             
            }
        } catch (error) {
            res.status(500).json({
                ok: false,
                status: 500,
                data: 'Ha ocurrido un error. Contacte al desarrollador backend.',
                error: JSON.stringify(error)
            })
        }
    }

    /**
     * CAMBIAR CONTRASEÑA
     */
    changePassword = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { body } = req;

        try {
            const existeUsuario = await Usuario.findByPk(id);

            if (existeUsuario) {
                let usuario = JSON.parse(JSON.stringify(existeUsuario));

                await existeUsuario.update({
                    password: bcrypt.hashSync(body.passwordNew, 10)
                });
                delete usuario.password;
                res.json(usuario);
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    mensaje: 'Usuario no encontrado.'
                })
            }
        } catch (error) {
            res.status(500).json({
                ok: false,
                status: 500,
                mensaje: 'Ha ocurrido un error. Contacte al desarrollador backend.',
                error: JSON.stringify(error)
            })
        }
    }

    /**
     * CAMBIAR CONTRASEÑA
     */
    changePassword2 = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { body } = req;

        try {
            const existeUsuario = await Usuario.findByPk(id);

            if (existeUsuario) {
                let usuario = JSON.parse(JSON.stringify(existeUsuario));

                if (!bcrypt.compareSync(body.passwordOld, usuario.password)) {
                    return res.status(400).json({
                        ok: false,
                        status: 400,
                        error: 'La contraseña actual no coincide.'
                    })
                } else {
                    await existeUsuario.update({
                        password: bcrypt.hashSync(body.password, 10)
                    });
                    delete usuario.password;
                    res.json(usuario);
                }
            } else {
                res.status(404).json({
                    ok: false,
                    status: 404,
                    error: 'Usuario no encontrado.'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                ok: false,
                status: 500,
                data: 'Ha ocurrido un error. Contacte al desarrollador backend.',
                error: JSON.stringify(error)
            })
        }

    }
}