const express = require("express");
const router = express.Router();

const { getPost, createPost, getPostById, createComment, deletePost, deleteComment } = require("../controllers/Post");

router.get('/',getPost)
router.get('/:id',getPostById)

router.post('/create',createPost)
router.post('/comment',createComment)

router.delete('/delete/:id',deletePost )
router.delete('/delete/comment/:id',deleteComment )

module.exports = router;