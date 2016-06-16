# My Zodiac Sign Is [![Build Status](https://travis-ci.org/cauealves/mzsi.svg?branch=master)](https://travis-ci.org/cauealves/mzsi)

> Discover the zodiac sign and know what their information, such as elements and behavioral characteristics.

> :aries: :taurus: :gemini: :cancer: :leo: :virgo: :libra: :scorpius: :sagittarius: :capricorn: :aquarius: :pisces:

<br />

## Install 

Via [Node.js](https://nodejs.org) run the following:
```bash
$ npm i mzsi --save
```

## Usage
```js
import mzsi from 'mzsi';

let day = 22,
    month = 8;
    
let sign = mzsi(month, day);

console.log(sign.name); // Leo
```

## License

MIT © [Cauê Alves](http://cauealves.com)
