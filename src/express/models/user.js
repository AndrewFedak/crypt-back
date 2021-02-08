const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    phone: {
        type: String,
        require: true,
        trim: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    isReCalled: {
        type: Boolean,
        require: false,
        default: false
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userScheme);

module.exports = User;