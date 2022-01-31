const router = require('express').Router()
const {createStudent, readAllData, updateData, deleteData} = require("../Contorllers/crudController")

router.post("/create" ,createStudent.name)

router.get("/read" ,readAllData.readData)

router.put("/update/:id" ,updateData.newUpdatedData)

router.delete("/delete/:id" ,deleteData.removeData)


module.exports = router