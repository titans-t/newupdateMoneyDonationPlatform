const mongoose = require("mongoose")

const DonationSchema = new mongoose.Schema({
    donationMadeby: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    donationAmount: {type: Number, required: true},
    paymentMethod: {type: String, required: false},
    campaignId: {type: mongoose.Schema.Types.ObjectId, ref: 'campaign'},
}, {timestamps: true})

module.exports = mongoose.model("donation", DonationSchema)