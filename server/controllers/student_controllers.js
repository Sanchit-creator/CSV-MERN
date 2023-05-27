const Student = require('../model/student');


module.exports.create = async (req, res) => {
    try {
        const exist = await Student.findOne({email: req.body.email})
        if (exist) {
            return res.status(401).json({ message: 'Student already registered'});
        }
        const newStudent = new Student({
            batch: req.body.batch,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            college: req.body.college,
            status: req.body.status,
            dsa: req.body.dsa,
            webd: req.body.webd,
            react: req.body.react,
            user: req.user._id
        });
        await newStudent.save();
        res.status(200).json({
            batch: req.body.batch,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            college: req.body.college,
            status: req.body.status,
            dsa: req.body.dsa,
            webd: req.body.webd,
            react: req.body.react,
            user: req.user._id
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports.fetch = async (req, res) => {
    try {
        const fetchData = await Student.find();
        res.status(200).json(fetchData);
        console.log(fetchData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.download = async (req, res) => {
    const {Parser} = require("json2csv")
    const jsoncsvParser = new Parser();
    try {
        const fetchData = await Student.find();
        const csv = await jsoncsvParser.parse(fetchData)
        res.attachment("student.csv")
        res.status(200).send(csv)
        console.log(csv);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

