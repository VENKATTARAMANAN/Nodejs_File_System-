const express =require("express");
const fs=require("fs")
const path=require("path")
const dirName =path.join(__dirname,"timestamps")
//Initialize express server 
const app=express();

app.get("/date-time",(req,res)=>{
    let date=new Date();
    let currentTimeStamp = date.toUTCString().slice(0,-3).slice(4);
    let content = `The last updated timestamp : ${currentTimeStamp}`;
    let name=currentTimeStamp.split(":").join("")
    fs.writeFile(`${dirName}/${name}.txt`,content,(err)=>{
        if(err){
            console.log(err);
            res.send("Error in writing the file")
            return
        }
        res.send("File send successfully")
    })
})
app.listen(9000,()=>console.log(`server started in localhost:9000`));