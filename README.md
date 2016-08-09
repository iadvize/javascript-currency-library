# javascript-currency-library

The goal of this library is to provide some services with the currencies.
The first one is to give the relationships between currencies and countries.

The data in this repo are pretty raws (ISO codes).
To have more display-friendler things, you can use some others library :
* to translate currency code into symbol : https://github.com/iadvize/javascript-i18n-library

Warning : the lists are not comprehensives ie. all the currencies are not defined and all the countries of a currency neither.

### How to install

    npm install --save javascript-jsonapi-library

### How to use it

```javascript
    const currencyManager = require('javascript-jsonapi-library');

    console.log(currencyManager.get('GBP').getCountries());
    // output : ['GB']

    console.log(currencyManager.get('EUR').getCountries());
    // output : ['ES','DE','FR', 'IT']

    console.log(currencyManager.findByCountry('FR');
    // output : 'EUR'

    console.log(currencyManager.get('EUR').isAvailableIn('UK'));
    // output : false
```

### Test

    npm test

To automatically launch the tests when a file is changed :

    npm run-script watch-test
