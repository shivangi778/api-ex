const mongoose = require('mongoose')


const internSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    attendance: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Intern',internSchema)
