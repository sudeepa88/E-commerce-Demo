const mongoose = require('mongoose');
const Product = require('./models/Product');


mongoose.connect('mongodb://localhost:27017/shopping-app-wb-lv-mar')
.then(()=>console.log("DB CONNECTED!!"))
.catch((err) => console.log(err));


const products = [
    {
        name:'iPhone',
        img:'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
        price: 45000,
        desc: "We're committed to transitioning our entire manufacturing supply chain to 100 percent renewable electricity by 2030.t "

    },
    {
        name:'Nike Shoes',
        img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price:5000,
        desc:"Greatness is not born, it is made."
     
    },
    {
        name:'Medicine',
        img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80',
        price:500,
        desc:"Take medicine for good health"
    },
    {
        name:'Bag',
        img:'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: 3000,
        desc:"Luxurious bags are dangerious for health"
    },
    {
        name:'Camera',
        img:'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price:250000,
        desc:"Cameras are made for capturing good memories , not for your stupid reels"
    },
    {
        name:'Quilt',
        img:'https://images.unsplash.com/photo-1594526761005-4ccdbd608d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price:400,
        desc:"Quilts are made for your survival in winter . Don't make it complex with your partner",

    },
    {
        name:'Water bottle',
        img:'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80',
        price:40,
        desc:"Here is the thing you are searching for .....you got that"
    },
    {
        name:'iPhone',
        img:'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80',
        price: 45000,
        desc: "We're committed to transitioning our entire manufacturing supply chain to 100 percent renewable electricity by 2030.t "

    },
    {
        name:'Nike Shoes',
        img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price:5000,
        desc:"Greatness is not born, it is made."
     
    },
    {
        name:'Medicine',
        img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80',
        price:500,
        desc:"Take medicine for good health"
    },
    {
        name:'Bag',
        img:'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price: 3000,
        desc:"Luxurious bags are dangerious for health"
    },
    {
        name:'Camera',
        img:'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price:250000,
        desc:"Cameras are made for capturing good memories , not for your stupid reels"
    },
    {
        name:'Quilt',
        img:'https://images.unsplash.com/photo-1594526761005-4ccdbd608d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        price:400,
        desc:"Quilts are made for your survival in winter . Don't make it complex with your partner",

    },
    {
        name:'Water bottle',
        img:'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80',
        price:40,
        desc:"Here is the thing you are searching for .....you got that"
    },
    
];






 async function seedProducts() {
      await Product.deleteMany({});
      await Product.insertMany(products);
      console.log('Product Seeded');
}

seedProducts();