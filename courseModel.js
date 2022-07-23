const Mongoose=require("mongoose")

const courses=Mongoose.model("courses",Mongoose.Schema({
       courseTitle:String,
       courseDescription:String,
       courseDuration:String,
       courseVenue:String,
       courseDate:String
}))
module.exports={courses}