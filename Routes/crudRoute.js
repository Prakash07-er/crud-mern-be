const router = require('express').Router()
const createStudent = require("../Contorllers/crudController")

router.post("/create" ,createStudent.name)

module.exports = router