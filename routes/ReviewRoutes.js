const express = require('express')
const { getAllReviews, getSingleReview, updateReview, deleteReview, createReview } = require('../controllers/ReviewController')

// Definir objeto de ruteo
const router = express.Router()

// Crear rutas sin parámetro
router.route('/').get(getAllReviews).post(createReview)

// Crear rutas con parámetro
router.route('/:id').get(getSingleReview).put(updateReview).delete(deleteReview)

module.exports = router