const express = require("express");

const app = express();


//middleware 
const middleware = (req,res,next) => {
    console.log("middleware");
    next();
}

 
//routes
app.get("/",(req,res) => {
    res.send("hello from the server");
})

app.get("/profile",middleware,(req,res) => {
    res.send("hello profile page");
})
app.get("/login",(req,res) => {
    res.send("hello login page");
})
app.get("/signup",(req,res) => {
    res.send("hello signup page");
})

app.listen(8000, () => {
    console.log("listenin to port 8000");
})