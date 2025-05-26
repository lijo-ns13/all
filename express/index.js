const express=require("express")
const js2xmlparser=require("js2xmlparser")
const app=express();

app.get("/",(req,res)=>{
    res.send("hello")
})
// with xml format repsose
// ->first we want to install package
app.get("/xml",(req,res)=>{
    const result={
        user:{
            id:1,
            name:"userone",
            age:"age here"
        }
    }
    const xmlResult=js2xmlparser.parse("response",result);
    res.set("Content-Type","application/xml")
    res.status(200).send(xmlResult);
})
app.listen(4000,()=>console.log(`http://localhost:4000/`))