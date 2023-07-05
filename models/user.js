const mongoose = require('mongoose');
const path = require('path');
const userSchema = new mongoose.Schema({
    CompanyName: {
        type: String,
        required: true,
        unique: true
    },
    clientID: {
        type: String,
        required: true
    },
    OwnerName: {
        type: String,
        required: true
    },
    OwnerEmail: {
        type: String,
        required: true
    },
    RollNo: {
        type: String,
        required: true
    },
     clientScrete: {
        type: String,
        required: true
    },
}, {
    timestamps: true       
});




const User = mongoose.model('User', userSchema);

module.exports = User;