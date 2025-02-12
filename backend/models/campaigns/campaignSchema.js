const mongoose = require('mongoose')


const campaignSchema = new mongoose.Schema({
    fullName: { type: String, required: true},
    purpose: { type: String, required: true},
    goalAmount: { type: Number, required: true},
    currentAmount: { type: Number, default: 0},
    status: { type: String, enum:["Pending", "Approved", "Rejected", "Closed"], default: "Pending"},
    reason: { type: String, required: true},
    place: { type: String, required: true},
    address: { type: String, required: true},
    pic: {type: String, required: false},
    createdBy: {type: mongoose.Schema.ObjectId, ref: "user"}, //findout who made the campaign
}, {timestamps: true})

module.exports = mongoose.model('campaign', campaignSchema)  