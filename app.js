const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todo-routes");
const app = express();



app.use(express.json())
app.use("/todos", router);


mongoose
    .connect("mongodb+srv://Scotcee:Madamchuks_01@cluster0.0ptzbnc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => 
        app.listen(5000,() => console.log("connected and listening to port 5000"))
    ).catch((err) => console.log(err));
    