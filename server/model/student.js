const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    batch: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dsa: {
        type: String,
        required: true
    },
    webd: {
        type: String,
        required: true
    },
    react: {
        type: String,
        required: true  
    },
    interview: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Interview'
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;