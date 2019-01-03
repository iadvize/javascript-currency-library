'use strict';

(function() {
  var currencies = {
    EUR: ['ES', 'DE', 'FR', 'IT', 'BE'],
    GBP: ['GB'],
    USD: ['US']
  };

  var currencyManager = function() {
    var isAvailableIn = function(country, currency) {
      return currencies[currency].indexOf(country) !== -1;// buddy ignore:line
    };

    return {
      /**
       * Get an currency object if it is supported
       *
       * @params {string} Currency code (ISO-4217)
       *
       * @returns {object} Object with two functions to get all the countries in which the currency is used
       *                   and to know if it is used in a specific country
       * @throws Error Throws an error if the currency is not supported
      */
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
      /**
       * find the currency used in a specific country
       *
       * @params {string} country Country code (ISO 3166-1 alpha-2)
       *
       * @returns {string} Currency code (ISO-4217)
       * @throws Error Throws an error if the country is not supported
      */
      findByCountry: function(country) {
        for (var currency in currencies) {
          if (currencies.hasOwnProperty(currency) && isAvailableIn(country, currency)) {
            return currency;
          }
        }
        throw new Error('The country ' + country + ' is not supported');
      },
      /**
       * List all the supported currencies
       *
       * @returns {Array} List of currency codes (ISO-4217)
      */
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
