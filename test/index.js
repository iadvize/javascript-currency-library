'use strict';

var assert = require('assert');
var currencyManager = require('../../javascript-currency-library');

describe('Currency getter', function() {
  it('should throw an error with a wrong currency', function() {
    assert.throws(
      function() {
        currencyManager.get('FOO');
      },
      /The currency FOO is not supported/
    );
  });

  it('should return an object with the getCountries function when the currency exists', function() {
    assert(currencyManager.get('EUR').getCountries);
  });
});

describe('Countries getter on currency object', function() {
  it('should return a country list in which the currency is available', function() {
    assert.deepEqual(currencyManager.get('EUR').getCountries(), ['ES', 'DE', 'FR', 'IT']);
    assert.deepEqual(currencyManager.get('GBP').getCountries(), ['GB']);
    assert.deepEqual(currencyManager.get('USD').getCountries(), ['US']);
  });
});

describe('Country tester on currency object', function() {
  it('should return false if the currency is not available in the country', function() {
    assert(!currencyManager.get('EUR').isAvailableIn('GB'));
  });

  it('should return true if the currency is available in the country', function() {
    assert(currencyManager.get('EUR').isAvailableIn('FR'));
  });
});

describe('Currency finder by country', function() {
  it('should throw an error with a wrong country', function() {
    assert.throws(
      function() {
        currencyManager.findByCountry('FOO');
      },
      /The country FOO is not supported/
    );
  });

  it('should return a currency when the country exists', function() {
    assert.equal(currencyManager.findByCountry('FR'), 'EUR');
    assert.equal(currencyManager.findByCountry('IT'), 'EUR');
    assert.equal(currencyManager.findByCountry('GB'), 'GBP');
    assert.equal(currencyManager.findByCountry('US'), 'USD');
  });
});

describe('Currency listing', function() {
  it('should return all the supported currencies', function() {
    assert.deepEqual(currencyManager.getSupportedCurrencies(), ['EUR', 'GBP', 'USD']);
  });
});
