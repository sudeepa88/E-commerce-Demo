

module.exports.isLoggedIn = (req,res,next)=> {
    if (!req.isAuthenticated()) {
        req.flash('error','YOU NEED TO LOGIN FIRST!!')
        return res.redirect('/login')
    }
    next();
}