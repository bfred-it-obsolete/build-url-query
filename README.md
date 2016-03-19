# build-url-query

> Build a query string from key-value pairs

## Install

```sh
npm i --save build-url-query
```

## Usage

```js
import buildUrlQuery from 'build-url-query';

var parameters = {
    q: 'Jet fuel steel beams',
    hl: 'en'
}
var url = 'https://www.google.com/' + buildUrlQuery(parameters);
// => 'https://www.google.com/?q=Jet%20fuel%20steel%20beams&hl=en'
```