import test from 'ava';
import mzsi from './';
import getSymbol from './get-symbol';

test('should return the correct symbols', t => {
  t.is(getSymbol('aquarius'), '♒');
  t.is(getSymbol('aries'), '♈');
  t.is(getSymbol('cancer'), '♋');
  t.is(getSymbol('capricorn'), '♑');
  t.is(getSymbol('gemini'), '♊');
  t.is(getSymbol('libra'), '♎');
  t.is(getSymbol('leo'), '♌');
  t.is(getSymbol('pisces'), '♓');
  t.is(getSymbol('sagittarius'), '♐');
  t.is(getSymbol('scorpio'), '♏');
  t.is(getSymbol('taurus'), '♉');
  t.is(getSymbol('virgo'), '♍');
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