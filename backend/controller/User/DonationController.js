const campaignSchema = require("../../models/campaigns/campaignSchema");
const donationSchmea = require("../../models/donations/donationSchmea");


const createDonation =async (req, res)=>{
    const {fullName, email,phoneNumber, donationAmount, paymentMethod} = req.body
    if(!fullName || !email || !phoneNumber || !donationAmount || !paymentMethod) return res.status(400).json({error: "all fields are required"})
    const {id:campaignId} = req.params
    const donationMadeby = req.userId
    try{
        const donation = await donationSchmea.create({donationMadeby, fullName, email, phoneNumber, donationAmount, paymentMethod, campaignId})
        if(!donation) return res.status(400).json({error: "error while making donation "})
        const campaign = await campaignSchema.findOne({_id: campaignId})
        campaign.currentAmount+= donation.donationAmount
        await campaign.save()
        res.status(200).json(donation)
    }catch(err){
        console.log(err.message, 'error comes from donationController');
        res.status(400).json(err.message)
    }
}
const getAllDonations= async (req,res)=>{
  try{
    const allDonations = await donationSchmea.find()
    if(!allDonations) return res.status(200).json([])
    res.status(200).json(allDonations)
  }catch(err){
    console.log(err.message, 'error comes from getAllDonations Route');
    res.status(400).json(err.message)
  }
}

const getMyDonations= async(req, res)=>{
  const loggedPersonId = req.userId
  try {
    const myDonations = await donationSchmea.find({donationMadeby: loggedPersonId})
    if(!myDonations) return res.status(400).json({error: "no donations found error"})
    res.status(200).json(myDonations)
  } catch (error) {
    console.log(error.message, 'error comes from getMyDonation Route');
    res.status(400).json(err.message)
  }
}
module.exports = {createDonation, getAllDonations, getMyDonations}