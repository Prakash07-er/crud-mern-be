const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
    name : {
        type: "String",
        required: true
    },
    standard : {
        type: "number",
        required: true
    }
})

module.exports = mongoose.model("CrudData", crudSchema)