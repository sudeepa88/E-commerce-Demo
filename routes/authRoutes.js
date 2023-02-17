const express = require('express');
const router = express.Router();
const User = require('../models/User');
//const { application } = require('express');
const passport = require('passport');


///get register page
router.get('/register',(req,res)=>{
    res.render('auth/signup');
});

//this user has been created for testing purposes
// router.get('/fakeUser',async(req,res)=>{
//     const user = new User({username:'max', email:'max@gmail.com'});
//     const newUser = await User.register(user,'12345');
//     res.send(newUser);
// });


router.post('/register',async(req,res) => {
    try{
        const {username,password,email} = req.body;
    const user = new User({ username, email});
    await User.register(user,password);
    req.flash('sucess','Registered Sucessfully!🥳🥳');
    res.redirect('/login');
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
        console.log(e);
    }
});


router.get('/login',(req,res)=>{
    res.render('auth/login');
});



//login userr into the session
router.post('/login',
  passport.authenticate('local',
  {
    failureRedirect: '/login',
    failureMessage: true,
    failureFlash: true
  }),
  function(req,res){
    req.flash('success',`Welcome back again ${req.user.username}`)
    res.redirect('/products');
  });


  ///logout part
  router.get('/logout',(req,res)=>{
    req.logout((err)=>{
      if(err){return next(err);}
      req.flash('success','GoodBye!!!🤗');
      res.redirect('/login');
    });
  })



module.exports = router;