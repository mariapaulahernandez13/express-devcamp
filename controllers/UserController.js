// Dependecias:
// Objeto de conexión:
const sequelize = require('../config/seq')
// Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
// El modelo
const UserModel = require('../models/user')

// Crear la entidad 
const User = UserModel(sequelize, DataTypes)

// Listar todos los users
exports.getAllUsers = async (req, res) => {
    try {
        // Traer todos los users
        const users = await User.findAll();
        // Response con todos los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": users
            })
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
    
}

// Listar user por id
exports.getSingleUser = async (req, res) => {
    try {
        console.log(req.params.id)
        const singleUser = await User.findByPk(req.params.id);
        if(singleUser){
            res
            .status(200)
            .json({
                "success": true,
                "data": singleUser
            })
        }else{
            res
            .status(400)
            .json({
                "success": true,
                "data": "Usuario no existente"
            })
        }
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Actualizar user por id
exports.updateUser = async (req, res) => {
    try {
        console.log(req.params.id)
        const singleUser = await User.findByPk(req.params.id);
        if(!singleUser){
            res
            .status(400)
            .json({
                "success": false,
                "data": "Usuario no existente"
            })
        }else{
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })

            const updatedUser = await User.findByPk(req.params.id);

            res
                .status(200)
                .json({
                    "success": false,
                    "data": updatedUser
                })
            }
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Eliminar user por id
exports.deleteUser = async (req, res) => {
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario eliminado"
        })
        } else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
            }
    } catch (error) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": " Error de servidor desconocido"
            })
        }
        
    }


// Crear nuevo user
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data": newUser
            })
    } catch (error) {
        if(error instanceof ValidationError){
            // Recorrer el arreglo de errores
            // ForEach
            // map
            const errores = error.errors.map( (elemento) => elemento.message )

            res.status(400).json({"success": false, "errors": errores})
        }else{
            res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
        }
    }
}