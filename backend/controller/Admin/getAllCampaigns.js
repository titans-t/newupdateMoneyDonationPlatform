const campaignSchema = require("../../models/campaigns/campaignSchema");
const { getReceiverSocketId, io } = require("../../socket/socket");

const getAllCampaigns = async (req, res) => {
    try {
        const authAdminId = req.userId
        if (!authAdminId) return res.status(400).json({ error: "un-authorized user" })
        const AllExistingSchema = await campaignSchema.find()


        if (!AllExistingSchema) return res.status(200).json([])
        res.status(200).json(AllExistingSchema)
    } catch (error) {
        res.status(400).json({ error: "error comes from admin getting campaigns router" })
        console.log("comes from auth admin getting campaign router", error.message);
    }
}


const setCammpaignStatusApproved = async (req, res) => {
    try {
        const authAdminId = req.userId
        const { id: camapaignId } = req.params
        if (!authAdminId) return res.status(400).json({ error: "un-authorized user" })
        const ExistingCampaign = await campaignSchema.findOne({ _id: camapaignId })
        if (!ExistingCampaign) return res.status(400).json({ error: "no campaign found at this time" })
        ExistingCampaign.status = "Approved"
        await ExistingCampaign.save()
        // SOCKET FEATURES 
        io.emit("statusApproved", ExistingCampaign)
        res.status(200).json(ExistingCampaign)

    } catch (error) {
        res.status(400).json({ error: "error comes from admin updating approved campaign router" })
        console.log("error comes from admin updating approved campaign router", error.message);
    }
}


const setCammpaignStatusRejected = async (req, res) => {
    try {
        const authAdminId = req.userId
        const { id: camapaignId } = req.params
        console.log();

        if (!authAdminId) return res.status(400).json({ error: "un-authorized user" })
        const ExistingCampaign = await campaignSchema.findOne({ _id: camapaignId })
        if (!ExistingCampaign) return res.status(400).json({ error: "no campaign found at this time" })
        ExistingCampaign.status = "Rejected"
        await ExistingCampaign.save()
        res.status(200).json(ExistingCampaign)

    } catch (error) {
        res.status(400).json({ error: "error comes from admin updating reject campaign router" })
        console.log("error comes from admin updating reject campaign router", error.message);
    }
}

const setCammpaignStatusClosed = async (req, res) => {
    try {
        const authAdminId = req.userId
        const { id: camapaignId } = req.params

        if (!authAdminId) return res.status(400).json({ error: "un-authorized user" })
        const ExistingCampaign = await campaignSchema.findOne({ _id: camapaignId })
        if (!ExistingCampaign) return res.status(400).json({ error: "no campaign found at this time" })
        ExistingCampaign.status = "Closed"
        await ExistingCampaign.save()
        res.status(200).json(ExistingCampaign)

    } catch (error) {
        res.status(400).json({ error: "error comes from admin updating reject campaign router" })
        console.log("error comes from admin updating reject campaign router", error.message);
    }
}


const deleteCampaignAdmin = async (req, res) => {
    try {
        const {id:camapaignId} = req.params

        const deleteCampaign = await campaignSchema.findOne({ _id: camapaignId })
        const deletedCampaign = await campaignSchema.deleteOne({ _id: camapaignId })
        
        return res.status(200).json(deleteCampaign)
    } catch (error) {
        res.status(400).json(error.message)
        console.log(error.message, 'error comes from deleting campaign for admin');
        
    }
}
module.exports = { getAllCampaigns, setCammpaignStatusApproved, setCammpaignStatusRejected, setCammpaignStatusClosed, deleteCampaignAdmin}