const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const {isLoggedIn} = require('../middleware');

//get all the products
router.get('/products',async(req,res)=> {
    const products = await Product.find({});
    res.render('products/index',{products});

});
router.get('/products/new',(req,res) => {
    res.render('products/new');
});

//create a new product
router.post('/products',isLoggedIn ,async(req, res) => {
    try {
        const { name,price,desc,img } = req.body;
    await Product.create({name,price,desc,img});
    req.flash('success','Product created succesfully')
    res.redirect('/products');
    } catch (error) {
        req.flash('error','Cannot created the product at the moment');
        res.redirect('/products/new');
    }
    
});
//show a product
router.get('/products/:productid', async (req,res)=>{
    const { productid } =req.params;
    const product = await Product.findById(productid).populate('reviews');
    //const message = req.flash('success')
    res.render('products/show', { product });
});
//get the edit form
router.get('/products/:productid/edit',isLoggedIn ,async (req,res)=> {
    const { productid } = req.params;
    const product = await Product.findById(productid);
    res.render('products/edit',{ product });

});

//update the product successfully
router.patch('/products/:productid',isLoggedIn ,async(req, res) => {
    const {productid}= req.params;
    const{name,price,desc,img}=req.body;
    await Product.findByIdAndUpdate(productid,{name,price,desc,img});
    req.flash('success','Updated the product sucessfully');
    res.redirect(`/products/${productid}`);
});

router.delete('/products/:productid',isLoggedIn ,async(req,res) => {
    const { productid }=req.params;
    await Product .findByIdAndDelete(productid);
    res.redirect('/products');

});
//getting home or landing page
router.get('/',(req,res) => {
    res.render('products/home');
});


module.exports = router;