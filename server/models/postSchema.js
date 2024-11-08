const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
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
},
{
    timestamps: true
}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
