const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
	new GoogleStrategy({
	//options for the google strategy
		callbackURL:'/auth/google/redirect',
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret
	}, (accessToken, refreshToken, profile, done)=>{
		//passport callback function
		console.log('User credentials');
		console.log('Name: ',profile.displayName);
		console.log('ID: ',profile.id);
		console.log(profile)
	})
);