const env = require('dotenv').config();

module.exports = {
    'facebookAuth' : {
        'clientID': process.env.appID,
        'clientSecret': process.env.appSecret,
        'callballURL': 'http://localhost:8080/auth/facebook/callback'
    }
}