const mongoose = require('mongoose')

async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL)    
        console.log('db connected');
    } catch (error) {
        console.log("error got from mongoose", error.message);
    }
    
}
module.exports ={connectToDb}