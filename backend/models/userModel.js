const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
   
    password: {
        type: String,
        required: true
    },

     role: {
        type: String,
        enum: ['Admin', 'user'], default: 'user',
        required: true
    },
    },
    {
            timestamps: true
})


const User = mongoose.model('User', userSchema)