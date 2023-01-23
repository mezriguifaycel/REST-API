const mongoose = require('mongoose')
//const {Schema} = require('mongoose')

const UserSchema = mongoose.Schema({
    Name: {type:String,
        required: true
    },
    
    age: Number,
    
    email:{type:String,
    required:true,
    unique:true,
    match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'please put a valid email']    
    },
    
    password:String
})

module.exports = mongoose.model('User',UserSchema)