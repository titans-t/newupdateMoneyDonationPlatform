const express= require("express")
const { userRegister, userLogin, adminLogin, adminRegister, logout, adminLogout, getAllUsers, deleteSingleUser } = require("../controller/authController")
const { gettingAuthAdmin } = require("../middleware/gettingAuthAdmin")
const router = express.Router()

router.get("/", (req, res)=>{
    res.send('working fine')
})

router.post('/register', userRegister)
router.post('/login', userLogin)
router.post("/adminLogin", adminLogin)
router.post("/adminRegister", adminRegister)
router.post("/logout", logout)
router.post("/admin/logout", adminLogout)

// admins
router.get("/allUsers", getAllUsers)
router.post("/:id/deleteUser",gettingAuthAdmin, deleteSingleUser)

module.exports =router