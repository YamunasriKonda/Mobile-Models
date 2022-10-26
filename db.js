const mongoose = require("mongoose");

const uri= "mongodb://localhost:27017/example";
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

const mobile = mongoose.model('mobile', mobileschema);

let newMobile=new mobile({
    brand:"Apple",
    modelNo:"iPhone 14 pro Max",
    review: " The best mobile you can buy in 2022",
    year: "2022",
    price: "£1,199"
    
});



module.exports = mongoose.model('mobiles', mobileschema);