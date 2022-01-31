const CrudData = require('../Models/crudModal')
const mongoose = require('mongoose');

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
            const {id} = req.params;
            const {name,standard} = req.body;

            if(!mongoose.Types.ObjectId.isValid(id)){ return res.status(404).send('No product with that id') }

            const updatedProduct = await CrudData.findByIdAndUpdate(id,{name,standard},{new:true});
            res.status(200).json(updatedProduct)

               
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
