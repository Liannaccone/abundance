// const router = require('express').Router();
// const passport = require ('passport');
// var path=require("path");

// //auth login
// router.get('/login', (req,res)=>{
// 	// res.render('login');
// 	res.sendFile(path.join(__dirname,"../test-views/login.html"))
// });

// //auth logout
// router.get('/logout',(req,res)=>{
// 	//handle with passport
// 	res.send('logging out');
// });

// //auth with google
// router.get('/google',passport.authenticate('google',{
// 	scope: ['profile']
// }));

// //callback route for google to redirect to:
// router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
// 	res.send('you reached the callback URI');
// });

// module.exports = router;