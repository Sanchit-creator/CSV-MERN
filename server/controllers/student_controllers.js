const Student = require('../model/student');


module.exports.create = async (req, res) => {
    try {
        const exist = await Student.findOne({email: req.body.email})
        if (exist) {
            return res.status(401).json({ message: 'Student already registered'});
        }
        const student = req.body;
        const newStudent = new Student(student);
        await newStudent.save();
        res.status(200).json({
            message: student
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}