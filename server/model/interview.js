const mongoose = require('mongoose');
const interviewSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    results: {
        type: String,
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});


const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;

