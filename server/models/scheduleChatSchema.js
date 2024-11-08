const mongoose = require('mongoose');

const scheduleChatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    expert: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expert',
        required: true
    },
    scheduledDateTime: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Expert = mongoose.model('Expert', scheduleChatSchema);

module.exports = Expert;
