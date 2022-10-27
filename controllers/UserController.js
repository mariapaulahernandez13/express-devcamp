// Dependecias:
// Objeto de conexión:
const sequelize = require('../config/seq')
// Datatypes de sequelize
const { DataTypes } = require('sequelize')
// El modelo
const UserModel = require('../models/user')

// Crear la entidad 
const User = UserModel(sequelize, DataTypes)

// Listar todos los users
exports.getAllUsers = async (req, res) => {
    // Traer todos los users
    const users = await User.findAll();
    // Response con todos los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// Listar user por id
exports.getSingleUser = async (req, res) => {
    console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

// Actualizar user por id
exports.updateUser = async (req, res) => {
    console.log(req.params.id)
    await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

// Eliminar user por id
exports.deleteUser = async (req, res) => {
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
            id: req.params.id
        }
      });
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

// Crear nuevo user
exports.createUser = async (req, res) => {
    const newUser = await User.create(req.body)
    res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
}