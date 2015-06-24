var assert      = require('chai').assert,
    Strategy    = require('../../lib/strategy');

function noop() {}

describe('Strategy', function() {
    describe('constructor', function() {
        var strategy, options;

        beforeEach(function() {
            options = {
                authorizationURL: 'http://somesite.com/auth',
                tokenURL: 'http://somesite.com/token',
                clientID: 'abc123',
                clientSecret: 'secret'
            };

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

        it('should have a params function', function() {
            assert.isFunction(strategy.tokenParams);
        });
    });
});