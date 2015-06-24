var Oauth2Strategy  = require('passport-oauth2'),
    util            = require('util');

function Strategy(options, verify) {
    Oauth2Strategy.call(this, options, verify);
}

util.inherits(Strategy, Oauth2Strategy);

module.exports = Strategy;