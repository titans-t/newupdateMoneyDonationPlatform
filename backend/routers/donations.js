const express = require('express')
const { createDonation, getAllDonations } = require('../controller/User/DonationController')
const { getAuthUser } = require('../middleware/gettingAuthUser')
const router= express.Router()

router.post("/:id/create", getAuthUser, createDonation )
router.get("/get", getAllDonations)

module.exports=router