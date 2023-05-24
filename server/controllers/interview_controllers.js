const Student = require('../model/student');
const Interview = require('../model/interview')



module.exports.create = async (req, res) => {
    try {
        const student = await Student.findOne({email: req.body.email})
        if (student) {  
            const newInterview = new Interview({
                company: req.body.company,
                date: req.body.date,
                email: req.body.email,
                results: req.body.results,
                student: req.body._id,
                user: req.body._id,
            })
            student.interview.push(newInterview)
            await student.save();
            await newInterview.save();
        }
        res.status(200).json({
            company: req.body.company,
            date: req.body.date,
            email: req.body.email,
            results: req.body.results,
            student: req.body._id,
            user: req.body._id,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}