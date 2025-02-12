const mongoose = require('mongoose')

const adminSchmea= new mongoose.Schema({
    username: { type: String, required: true},
    password: { type: String, required: true},
    confirmPassword: { type: String, required: true},
    role: { type: String, default: "admin"}

}, {timestamps: true})

module.exports = mongoose.model('authAdmin', adminSchmea)