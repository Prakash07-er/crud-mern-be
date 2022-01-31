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

module.exports = createStudent