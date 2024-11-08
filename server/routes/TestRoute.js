const express = require("express");
const router = express.Router();

const { getTest, createTest } = require("../controllers/Test");

router.get('/',getTest)

router.post('/create',createTest)


module.exports = router;