var assert      = require('chai').assert,
    Strategy    = require('../../lib/strategy');

function noop() {}

describe('Strategy', function() {
    var options;

    beforeEach(function() {
    options = {
            authorizationURL: 'http://somesite.com/auth',
            tokenURL: 'http://somesite.com/token',
            clientID: 'abc123',
            clientSecret: 'secret'
        };
    });

    describe('constructor', function() {
        var strategy;

        beforeEach(function() {
            strategy = new Strategy(options, noop);
        });

        it('should export a function', function() {
            assert.isFunction(Strategy);
        });

        it('should accept 2 parameters: options and verify', function() {
            assert.equal(Strategy.length, 2);
        });

        it('should have an authenticate function', function() {
            assert.isFunction(strategy.authenticate);
        });

        it('should have a tokenParams function', function() {
            assert.isFunction(strategy.tokenParams);
        });

        it('should have a authorizationParams function', function() {
            assert.isFunction(strategy.authorizationParams);
        });

        it('should assign the _tokenParams', function() {
            assert(strategy._tokenParams);
        });
    });

    describe('tokenParams function', function() {
        it("should return the constructor's supplied option's tokenParams", function() {
            options.tokenParams = {
                key: 'value'
            };

            var strategy = new Strategy(options, noop);

            var res = strategy.tokenParams({});
            assert.equal(res, options.tokenParams);
        });
    });

    describe('authorizationParams function', function() {
        it("should return the constructor's supplied option's authorizationParams", function() {
            options.authorizationParams = {
                key: 'value'
            };

            var strategy = new Strategy(options, noop);

            var res = strategy.authorizationParams({});
            assert.equal(res, options.authorizationParams);
        });
    });
});