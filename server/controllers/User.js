const User = require("../models/userSchema");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user._id);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserByID = async( req,res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

const getUserId = async (req, res) => {
  try {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user.password === password) {
        res.status(200).json(user._id);
      } else {
        res.status(401).json({ message: "User does not exist" });
      }
    } catch (error) {
      res.status(401).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userByUsername = await User.findOne({ username });
    const userByEmail = await User.findOne({ email });

    if (userByUsername || userByEmail) {
      return res.status(401).json({ message: "User already exists" });
    }

    const user = await User.create(req.body);
    res.status(200).json(user._id);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = { getUser, createUser, getUserId, getUserByID };
