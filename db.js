const mongoose = require("mongoose");

const uri= "mongodb://localhost:27017/mobileDb";
const opts= {useNewUrlParser:true};

mongoose.connect(uri, opts).then(() => {console.log("connection ready")}, (err) => {console.log("error occured")});

const Schema = mongoose.Schema;

const mobileschema = new Schema({
    brand:{
        type: String,
        required:true,
        minlength:3
    },

    modelNo:{
        type: String,
        rquired: true,
        minlength:2
    },

    review:{
        type:String,
        required:true,
        minlength:5

    },
    
    year:{
        type: String,
        reuired:true,
        minlength:4
    },
    price:{
        type: String,
        reuired:true,
        minlength:2
    }
});

module.exports = mongoose.model('mobiles', mobileschema);