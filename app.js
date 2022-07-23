const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {courses}=require("./courseModel")

const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use (Bodyparser.json())
Mongoose.connect("mongodb+srv://AKHIL:youloveme007@cluster0.5qzwyoy.mongodb.net/CollegeDB?retryWrites=true&w=majority")

app.get("/",(req,res)=>{
    res.send("Hiii")
})

app.post("/addcourse",async (req,res)=>{
    const data=req.body
    const ob=new courses(data)
    ob.save(
        (error,data)=>{
            if(error)
            {
                res.send("Error vannu...")
            }
            else
            {

                res.send(data)
            }
        }
    )
})

app.get("/viewcourse",async (req,res)=>{
    courses.find(
           (error,data)=>{
            if(error)
            {
                res.send(error)
            }
            else
            {
                res.send(data)
            }
           }
    )

})

app.get("/updatecourse",(req,res)=>{
    res.send("WELCOME TO UPDATE COURSE")
})

app.get("/searchcourse",(req,res)=>{
    res.send("WELCOME TO SEARCH COURSE")
})

app.get("/deletecourse",(req,res)=>{
    res.send("WELCOME TO DELETE COURSE")
})

app.listen(3000,()=>{
    console.log("Poyii browser il check chei :)")
})

