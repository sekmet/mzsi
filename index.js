module.exports = (month, day) => {
  'use strict';

  if (typeof month !== 'number' || typeof day !== 'number') {
    console.error('You should inform the day and month of birth date.');
  }

  let sign;

  if (day <= 19 && month === 1) {
    sign = 'Capricorn';
  } else if ((day >= 20 && month === 1) || (day <= 18 && month === 2)) {
    sign = 'Aquarius';
  } else if ((day >= 19 && month === 2) || (day <= 20 && month === 3)) {
    sign = 'Pisces';
  } else if ((day >= 21 && month === 3) || (day <= 19 && month === 4)) {
    sign = 'Aries';
  } else if ((day >= 20 && month === 4) || (day <= 20 && month === 5)) {
    sign = 'Taurus';
  } else if ((day >= 21 && month === 5) || (day <= 20 && month === 6)) {
    sign = 'Gemini';
  } else if ((day >= 21 && month === 6) || (day <= 21 && month === 7)) {
    sign = 'Cancer';
  } else if ((day >= 22 && month === 7) || (day <= 22 && month === 8)) {
    sign = 'Leo';
  } else if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) {
    sign = 'Virgo';
  } else if ((day >= 23 && month === 9) || (day <= 22 && month === 10)) {
    sign = 'Libra';
  } else if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) {
    sign = 'Scorpio';
  } else if ((day >= 22 && month === 11) || (day <= 21 && month === 12)) {
    sign = 'Sagittarius';
  } else if (day >= 22 && month === 12) {
    sign = 'Capricorn';
  }
  
  return {
    name: sign,
    symbol: require('./get-symbol')(sign.toLowerCase()),
    about: require('./about.json')[sign.toLowerCase()]
  };
};
