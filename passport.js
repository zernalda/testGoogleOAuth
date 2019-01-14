const passport = require('passport');
const JwtStrategy = require('passport-jwt').strategy;
const { ExtractJwt } = require(passport-jwt);
const LocalStrategy = require('passport-local').strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const { JWT_SECRET } = require('./configuration');
const User = require('./models/users');



// GOOGLE OAUTH STRATEGY
passport.use('googleToken', GooglePlusTokenStrategy({
    // specify google client secret and key
    clientID: '360390256826-dd7rk86a9i5ef2gbodpe922306a66ibv.apps.googleusercontent.com';
    clientSecret:'4CPlnjoBoMRfZMdSk5IGeL-y';
}, async (accessToken, refreshToken, profile, done) => {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile', profile);
}));
