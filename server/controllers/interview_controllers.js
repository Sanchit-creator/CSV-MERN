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


module.exports.fetch = async (req, res) => {
    try {
        const fetchData = await Interview.find();
        res.status(200).json(fetchData);
        console.log(fetchData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.destroy = async (req, res) => {
    try {
        const exist = await Interview.findById(req.params.id);
        const student = await Student.findOne({email: req.body.email})
        if (exist) {
            await exist.deleteOne();
            await Student.findByIdAndUpdate(student._id, { $pull: { interview: req.params.id } }).exec();
            res.status(200).json(student)
            student.interview.pull({_id: req.params.id})
        }
         else {
            res.status(404).json({ message: "Interview not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// module.exports.update = async (req, res) => {
//     try {
//         const exist = await Interview.findById(req.params.id)
//         if (exist) {
//             await exist.findByIdAndUpdate(req.body);
//             res.status(200).json(exist);
//         }
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// }


