const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type :String,
        required : "Name of Book required"
        
    },
    author:{
        type:String,
        required:"Author's name is required"
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type: String,
        required:"Price of book is required"
    },
    available: Boolean,
    image:{
        type: String,
        required: "Image of the book is required"
    }
})

module.exports=  mongoose.model('Book', bookSchema);