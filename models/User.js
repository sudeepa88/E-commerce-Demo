const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new mongoose.Schema({
    // username:String,-->>This is automatically added by passport-local-mongoose
    // password:String,-->> same as above

    email:String,
    cart: [
        {
             _id:{id:false},
            name: String,
            price: Number,
            img: String,
            id: mongoose.Schema.Types.ObjectId,
            count:{
                type: Number,
                default:1,
                min:[0, 'Quantity can not be less than one']
            }
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);

module.exports = User;

