const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
require("./db/connection");
const route = require("./routes/auth");

const app = express();


//middleware 
app.use(express.json());
app.use(route);

 
//routes



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("listenin to port 8000");
})