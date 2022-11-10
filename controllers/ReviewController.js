// Dependecias:
// Objeto de conexión:
const sequelize = require('../config/seq')
// Datatypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
// El modelo
const ReviewModel = require('../models/reviews')

// Crear la entidad 
const Review = ReviewModel(sequelize, DataTypes)

// Listar todos los Reviews
exports.getAllReviews = async (req, res) => {
    try {
        // Traer todos los Reviews
        const reviews = await Review.findAll();
        // Response con todos los datos
        res
        .status(200)
        .json({
            "success": true,
            "data": reviews
        })
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Listar Review por id
exports.getSingleReview = async (req, res) => {
    try {
        console.log(req.params.id)
        const singleReview = await Review.findByPk(req.params.id);
        if(singleReview){
            res
            .status(200)
            .json({
                "success": true,
                "data": singleReview
            })
        }else{
            res
            .status(400)
            .json({
                "success": true,
                "data": "Review no existente"
            })
        }
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Actualizar Review por id
exports.updateReview = async (req, res) => {
    try {
        console.log(req.params.id)
        const singleReview = await Review.findByPk(req.params.id);
        if(!singleReview){
            res
            .status(200)
            .json({
                "success": false,
                "data": `Review no existente`
            })
        }else{
            await Review.update(req.body, {
                where: {
                    id: req.params.id
                }
            })

            const updatedReview = await Review.findByPk(req.params.id);

            res
                .status(200)
                .json({
                    "success": false,
                    "data": updatedReview
                })
        }
    } catch (error) {
        res.status(400).json({"success": false, "errors": "error del servidor desconocido"})
    }
}

// Eliminar Review por id
exports.deleteReview = async (req, res) => {
    //console.log(req.params.id)
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if(!singleReview){
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Review eliminado"
            })
        }else{
            await Review.destroy({
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

// Crear nuevo Review
exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body)
        res
        .status(200)
        .json({
            "success": true,
            "data": newReview
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