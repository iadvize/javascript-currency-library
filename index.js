'use strict';

(function() {
  var currencies = {
    EUR: ['ES', 'DE', 'FR', 'IT'],
    GBP: ['GB']
  };

  var currencyManager = function() {
    var isAvailableIn = function(country, currency) {
      return currencies[currency].indexOf(country) !== -1;// buddy ignore:line
    };

    return {
      get: function(currency) {
        if (currencies[currency]) {
          return {
            getCountries: function() {
              return currencies[currency];
            },
            isAvailableIn: function(country) {
              return isAvailableIn(country, currency);
            }
          };
        }
        throw new Error('The currency ' + currency + ' is not supported');
      },
      findByCountry: function(country) {
        for (var currency in currencies) {
          if (currencies.hasOwnProperty(currency) && isAvailableIn(country, currency)) {
            return currency;
          }
        }
        throw new Error('The country ' + country + ' is not supported');
      },
      getSupportedCurrencies: function() {
        return Object.getOwnPropertyNames(currencies);
      }
    };
  };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = currencyManager();
  }

  // Browser
  if (typeof window !== 'undefined') {
    window.iadvize = window.iadvize || {};
    window.iadvize.currencyManager = currencyManager();
  }
}());
