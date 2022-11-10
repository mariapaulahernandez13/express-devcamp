const express = require('express')
const { getAllCourses, getSingleCourse, updateCourse, deleteCourse, createCourse } = require('../controllers/CourseController')

// Definir objeto de ruteo
const router = express.Router()

// Crear rutas sin parámetro
router.route('/').get(getAllCourses).post(createCourse)

// Crear rutas con parámetro
router.route('/:id').get(getSingleCourse).put(updateCourse).delete(deleteCourse)

module.exports = router