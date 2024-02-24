const mongoose=require('mongoose')

const connectToMongo=async()=>{
    try {
        const con=await mongoose.connect(process.env.mongo_URI);
        console.log(`Connected to MONGODB ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`MongoDb Error ${error}`)
    }
}

module.exports=connectToMongo;