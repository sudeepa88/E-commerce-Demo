
const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middleware');
const User = require('../models/User');
const Product = require('../models/Product')


router.get('/products/user/cart',isLoggedIn,async (req,res)=>{
    try {
        const cart =req.user.cart;
        const totalAmount = cart.reduce((sum,item)=>sum+item.price*item.count,0);
        res.render('cart/cartPage',{ cart,totalAmount });
    } 
    
    catch (e) {
        console.log(e);
        req.flash('error','cannot add the product to the cart at the moment');
        res.redirect('/products');
    }
    
})

router.post('/products/:productid/cart',isLoggedIn, async(req,res) =>{
        try {
             const { productid } = req.params;
             const userid = req.user._id;
             const user = await User.findById(userid);
             
             const isPresent = user.cart.some((item)=>item.id.equals(productid));
             
             console.log(isPresent);
             if(isPresent){
                const item = user.cart.find((item)=>item.id.equals(productid));
                item.count++;
                

                //1:27:35                

             }else{
                const product = await Product.findById(productid);

                  user.cart.push({
                      name:product.name, 
                      price:product.price, 
                      img:product.img, 
                      id:product._id
            });
             }
             
             ///I HAVE TO SAVE THIS USER BECAUSE WE HAVE MADE CHANGES IN ITS CART.
              await user.save();

             res.redirect('/products/user/cart');
            } 
    catch (e) {
        console.log(e);
        req.flash('error','cannot add the product to the cart at the moment');
        res.redirect('/products');
    }
    

});

module.exports = router;
