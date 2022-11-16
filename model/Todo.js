const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
       title: {
        type: String
    },
    description: {
        type: String
    },
    done: {
        type:Boolean
    }
    
},
{ timestamps:true}
);

module.exports = mongoose.model("toDo", userSchema);