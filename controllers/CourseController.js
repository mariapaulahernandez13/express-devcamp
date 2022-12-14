// Dependecias:
// Objeto de conexión:
const sequelize = require('../config/seq')
// Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
// El modelo
const CourseModel = require('../models/courses')

// Crear la entidad 
const Course = CourseModel(sequelize, DataTypes)

// Listar todos los courses
exports.getAllCourses = async (req, res) => {
    try {
        // Traer todos los courses
        const courses = await Course.findAll();
        // Response con todos los datos
        res
        .status(200)
        .json({
            "success": true,
            "data": courses
        })
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Listar course por id
exports.getSingleCourse = async (req, res) => {
    try {
        console.log(req.params.id)
        const singleCourse = await Course.findByPk(req.params.id);
        if(singleCourse){
            res
            .status(200)
            .json({
                "success": true,
                "data": singleCourse
            })
        }else{
            res
            .status(400)
            .json({
                "success": true,
                "data": "Course no existente"
            })
        }
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Actualizar course por id
exports.updateCourse = async (req, res) => {
    try {
        console.log(req.params.id)
        const singleCourse = await Course.findByPk(req.params.id);
        if(!singleCourse){
            res
            .status(200)
            .json({
                "success": false,
                "data": `Course no existente`
            })
        }else{
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            })

            const updatedCourse = await Course.findByPk(req.params.id);

            res
                .status(200)
                .json({
                    "success": false,
                    "data": updatedCourse
                })
        }
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Eliminar course por id
exports.deleteCourse = async (req, res) => {
    //console.log(req.params.id)
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if(!singleCourse){
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Course eliminado"
            })
        }else{
            await Course.destroy({
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

// Crear nuevo course
exports.createCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body)
        res
        .status(200)
        .json({
            "success": true,
            "data": newCourse
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