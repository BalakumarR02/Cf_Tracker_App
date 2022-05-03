const mongoose = require("mongoose");
const { Schema } = mongoose;


const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    age:
    {
        type: Number
    },
    city: String,
    phone: {
        type: Number,
        required: true,
        min: 100000000,
        max: 9999999999
    }
});


const User = mongoose.model("User", schema);
module.exports = User;