const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    desc:String,
    reviews: [
        {
            type:mongoose.Schema.Types.ObjectId,// speifying non premitive type of data 
            ref:'Review'//id is fetching from "Review" named model
        }
    ]

});


const Product = mongoose.model('Product', productSchema);


module.exports = Product;