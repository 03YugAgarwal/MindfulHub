const express = require("express");
const router = express.Router();

const { getUser, createUser, getUserId, getUserByID } = require("../controllers/User");

router.get('/',getUser)
router.post('/login',getUserId)
router.get('/:id',getUserByID)

router.post('/register',createUser)


module.exports = router;