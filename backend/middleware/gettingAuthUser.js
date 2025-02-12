const jwt = require('jsonwebtoken')
const getAuthUser = async (req, res, next) => {
    try {
        const token = req.cookies.auth
        if(!token) return res.status(400).json({error: "token not found " })
        const decruptedData= await jwt.verify(token, process.env.SECRET_KEY)
        if(!decruptedData) return res.status(200).json({error: "unauthorized user " })
        req.userId=decruptedData.userId
        next()
    } catch (error) {
        res.status(400).json({ error: "error comes from gettingAuthUser router" })
        console.log("comes from gettingAuthUser router", error.message);
    }
}
module.exports = { getAuthUser }