// Dependecias:
// Objeto de conexión:
const sequelize = require('../config/seq')
// Datatypes de sequelize
const { DataTypes } = require('sequelize')
// El modelo
const CourseModel = require('../models/course')

// Crear la entidad 
const Course = CourseModel(sequelize, DataTypes)

// Listar todos los courses
exports.getAllCourses = (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí van a salir todos los courses"
        })
}

// Listar course por id
exports.getSingle('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a salir el course cuyo id es ${req.params.id}`
        })
})

// Actualizar course por id
exports.put('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el course cuyo id es ${req.params.id}`
        })
})

// Eliminar course por id
exports.delete('/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el course cuyo id es ${req.params.id}`
        })
})

// Crear nuevo course
exports.post('/', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar course"
        })
})