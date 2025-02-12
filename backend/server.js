const PORT = process.env.PORT || 5000
const express = require("express")
// const app = express()
const { app, server } = require("./socket/socket")
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const { connectToDb }= require('./db/connecttodb')
const cors = require('cors')
dotenv.config()


// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))



//  app routers 
app.use("/", require('./routers/auth'))
app.use("/api/campaign", require("./routers/campaignRoute"))
app.use("/api/admin", require("./routers/campaignRoute"))
app.use("/api/donations", require("./routers/donations"))


// app listening
server.listen(PORT, ()=>{
    connectToDb()
    console.log(`PORT running on ${[PORT]}`);
})