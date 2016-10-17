import test from 'ava';
import mzsi from './';
import getSymbol from './get-symbol';

test('should return the correct symbols', t => {
  t.is(getSymbol(1), '♒');
  t.is(getSymbol(2), '♓');
  t.is(getSymbol(3), '♈');
  t.is(getSymbol(4), '♉');
  t.is(getSymbol(5), '♊');
  t.is(getSymbol(6), '♋');
  t.is(getSymbol(7), '♌');
  t.is(getSymbol(8), '♍');
  t.is(getSymbol(9), '♎');
  t.is(getSymbol(10), '♏');
  t.is(getSymbol(11), '♐');
  t.is(getSymbol(12), '♑');
});

test('should thrown exception with invalid day and month', t => {
  t.throws(() => {
    mzsi([], 15)
  }, 'The month should be a number');

  t.throws(() => {
    mzsi(1, false)
  }, 'The day should be a number');
});

test('should return correct keys', t => {
  const sign = mzsi(1, 20);

  t.true(typeof sign.name === 'string');
  t.true(typeof sign.symbol === 'string');
  t.true(typeof sign.about === 'object');
});

test('should be return the correct sign on extremities of the dates', t => {
  t.is(mzsi(1, 20).name, 'Aquarius');
  t.is(mzsi(2, 18).name, 'Aquarius');
  t.is(mzsi(2, 19).name, 'Pisces');
  t.is(mzsi(3, 20).name, 'Pisces');
  t.is(mzsi(3, 21).name, 'Aries');
  t.is(mzsi(4, 19).name, 'Aries');
  t.is(mzsi(4, 20).name, 'Taurus');
  t.is(mzsi(5, 20).name, 'Taurus');
  t.is(mzsi(5, 21).name, 'Gemini');
  t.is(mzsi(6, 20).name, 'Gemini');
  t.is(mzsi(6, 21).name, 'Cancer');
  t.is(mzsi(7, 20).name, 'Cancer');
  t.is(mzsi(7, 23).name, 'Leo');
  t.is(mzsi(8, 22).name, 'Leo');
  t.is(mzsi(8, 23).name, 'Virgo');
  t.is(mzsi(9, 22).name, 'Virgo');
  t.is(mzsi(9, 23).name, 'Libra');
  t.is(mzsi(10, 21).name, 'Libra');
  t.is(mzsi(10, 23).name, 'Scorpio');
  t.is(mzsi(11, 21).name, 'Scorpio');
  t.is(mzsi(11, 22).name, 'Sagittarius');
  t.is(mzsi(12, 21).name, 'Sagittarius');
  t.is(mzsi(12, 22).name, 'Capricorn');
  t.is(mzsi(1, 19).name, 'Capricorn');
});

test('should return the correct name when language is pt-br', t => {
  t.is(mzsi(1, 20, 'pt-br').name, 'Aquário');
  t.is(mzsi(2, 19, 'pt-br').name, 'Peixes');
  t.is(mzsi(3, 21, 'pt-br').name, 'Áries');
  t.is(mzsi(4, 20, 'pt-br').name, 'Touro');
  t.is(mzsi(6, 20, 'pt-br').name, 'Gêmeos');
  t.is(mzsi(7, 20, 'pt-br').name, 'Câncer');
  t.is(mzsi(7, 23, 'pt-br').name, 'Leão');
  t.is(mzsi(8, 23, 'pt-br').name, 'Virgem');
  t.is(mzsi(9, 23, 'pt-br').name, 'Libra');
  t.is(mzsi(10, 23, 'pt-br').name, 'Escorpião');
  t.is(mzsi(11, 22, 'pt-br').name, 'Sagitário');
  t.is(mzsi(12, 22, 'pt-br').name, 'Capricórnio');
});