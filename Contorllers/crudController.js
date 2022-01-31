const CrudData = require('../Models/crudModal')

//create
const createStudent = {
    name : async(req,res) => {
        try {
            const name = req.body.name
            const standard = req.body.standard

            const allData = await CrudData({
                name, 
                standard
            })
            await allData.save()
            res.status(200).json({msg: "Data inserter"})
        } catch (error) {
            res.status(404).json({msg: "Data not inserter"})
        }
    }
}

//read
const readAllData = {
    readData : async (req,res) => {
        try {
            const data = await CrudData.find({})
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({msg: "Internal server error"})
        }
        
    }
}

//Update data
const updateData = {
    newUpdatedData : async (req,res) => {
        try {
            const newStudentName = req.body.name
            const id = req.body.id

                await CrudData.findById(id, (error, newUpdatedStudentName) => {
                newUpdatedStudentName.name = newStudentName
                newUpdatedStudentName.save()
                res.status(200).json({msg: "Data Updated "})
            })
        } catch (error) {
            res.status(500).json({msg: "Internal server error"})
            console.log(error);
        }
        
    }
}

//delete data
const deleteData = {
    removeData : async (req,res) => {
        try {
            const id = req.params.id

            await CrudData.findByIdAndRemove(id).exec()
            res.status(200).json({msg:"Data Deleted"})

        } catch (error) {
            res.status(500).json({msg: "Internal server error"})
        }
        
    }
}

module.exports = {createStudent,readAllData, updateData, deleteData}
