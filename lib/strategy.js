var Oauth2Strategy  = require('passport-oauth2'),
    util            = require('util');

function Strategy(options, verify) {
    this._tokenParams = options.tokenParams || {};
    this._authorizationParams = options.authorizationParams || {};
    Oauth2Strategy.call(this, options, verify);
}

util.inherits(Strategy, Oauth2Strategy);

Strategy.prototype.tokenParams = function(options) {
    return this._tokenParams;
};

Strategy.prototype.authorizationParams = function(options) {
    return this._authorizationParams;
};

module.exports = Strategy;