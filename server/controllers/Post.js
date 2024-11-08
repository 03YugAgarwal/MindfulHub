const Post = require("../models/postSchema")
const Comment = require("../models/commentSchema")

const getPost = async(req,res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

const getPostById = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post){
            const comments = await Comment.find({post: req.params.id})
            res.status(200).json({post, comments});
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }

}

const createPost = async(req,res) => {
    try {
        const post = await Post.create(req.body);
        res.status(200).json(post);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

const createComment = async(req,res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json(comment);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

const deletePost = async(req,res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}

const deleteComment = async(req,res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json(comment);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: "Internal Server Error"})
    }
}


module.exports = { getPost, createPost, getPostById, createComment, deletePost, deleteComment }