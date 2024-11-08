const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isAnonymous: {
        type: Boolean,
        default: false
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
