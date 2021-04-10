const mongoose = require("mongoose");

const DB = process.env.DATABASE;

module.exports = mongoose.connect(DB,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err.message));
