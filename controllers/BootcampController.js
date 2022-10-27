// Dependecias:
// Objeto de conexión:
const sequelize = require('../config/seq')
// Datatypes de sequelize
const { DataTypes } = require('sequelize')
// El modelo
const BootcampModel = require('../models/bootcamp')

// Crear la entidad 
const Bootcamp = BootcampModel(sequelize, DataTypes)

// Listar todos los bootcamps
exports.getAllBootcamps = (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí van a salir todos los bootcamps"
        })
}

// Listar bootcamp por id
exports.getSingleBootcamp = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a salir el bootcamp cuyo id es ${req.params.id}`
        })
}

// Actualizar bootcamp por id
exports.updateBootcamp = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        })
}

// Eliminar bootcamp por id
exports.deleteBootcamp = (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el bootcamp cuyo id es ${req.params.id}`
        })
}

// Crear nuevo bootcamp
exports.createBootcamp = (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar bootcamp"
        })
}