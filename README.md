javascript-currency-library [![CircleCI](https://circleci.com/gh/iadvize/javascript-currency-library.svg?style=svg)](https://circleci.com/gh/iadvize/javascript-currency-library)
===========================

The goal of this library is to provide some services with the currencies.
The first one is to give the relationships between currencies and countries.

The data in this repo are pretty raws (ISO codes).
To have more display-friendler things, you can use some others library :
* to translate currency code into symbol : https://github.com/iadvize/javascript-i18n-library

Warning : the lists are not comprehensives ie. all the currencies are not defined and all the countries of a currency neither.

## Examples

```javascript
    const currencyManager = require('javascript-currency-library');

    console.log(currencyManager.get('GBP').getCountries());
    // output : ['GB']

    console.log(currencyManager.get('EUR').getCountries());
    // output : ['ES','DE','FR', 'IT']

    console.log(currencyManager.findByCountry('FR');
    // output : 'EUR'

    console.log(currencyManager.get('EUR').isAvailableIn('UK'));
    // output : false

   console.log(currencyManager.getSupportedCurrencies());
   // output : ['EUR', 'GBP']
```

## Install

    npm install --save javascript-currency-library

## Documentation

Look at the documentation in the code.

## Contribute

Look at contribution guidelines here : [CONTRIBUTING.md](CONTRIBUTING.md)

### Running tests locally

Simply run :

    npm test

To automatically launch the tests when a file is changed :

    npm run watch-test

Check the style :

    npm run check-build
