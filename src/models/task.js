const mongoose = require('mongoose')
const User = require('./user')

const taskSchema = new mongoose.Schema({
    description: {
        type: 'string',
        required: true,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false                //default is false if value is not provided
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true,

})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task