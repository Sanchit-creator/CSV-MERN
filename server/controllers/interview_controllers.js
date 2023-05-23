const Student = require('../model/student');
const Interview = require('../model/interview')



module.exports.create = async (req, res) => {
    try {
        const student = await Student.findById(req.body.student)
        if (student) {  
            const newInterview = new Interview({
                company: req.body.company,
                date: req.body.date,
                student: req.body._id,
                user: req.body._id,
            })
            student.interview.push(newInterview)
            await newInterview.save();
        }
        res.status(200).json({
            company: req.body.company,
            date: req.body.date,
            student: req.body.student,
            user: req.body.user,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}