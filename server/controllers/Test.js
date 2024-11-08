const Test = require("../models/testSchema")

const getTest = async(req,res) => {
    try {
        const test = await Test.find();
        res.status(200).json(test);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

const createTest = async(req,res) => {
    try {
        const test = await Test.create(req.body);
        res.status(200).json(test);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

module.exports = { getTest, createTest }