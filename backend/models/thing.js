const mongoose = require('mongoose')

const thingSchema = mongoose.Schema({
    name: {type:String, required: true},
    description: {type:String, required:true},
    price: {type:Number,required:true},
    inStock:{type:Boolean},
}) 

module.exports = mongoose.model('thing',thingSchema)