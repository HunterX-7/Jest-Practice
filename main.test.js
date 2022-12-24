const functions = require('./main')

test('Check string length', ()=> {
  expect(functions.stringLength('hello')).toBe(5);
});

test('Check error on empty string', ()=> {
  expect(()=> functions.stringLength('')).toThrow();
});

test('Check reverse string', ()=> {
  expect(functions.reverseString('hello')).toBe('olleh');
});

describe('Test calculador', ()=> {
  test('test add error', ()=> {
    const suma = new functions.Calculador();
    expect(() => suma.add('5', '5')).toThrow();
  })
  test('test add', ()=> {
    const suma = new functions.Calculador();
    expect(suma.add(1,2)).toBe(3);
  })
  test('test subtract error', ()=> {
    const resta = new functions.Calculador();
    expect(() => resta.subtract('5', '5')).toThrow();
  })
  test('test subtract', ()=> {
    const resta = new functions.Calculador();
    expect(resta.subtract(2,1)).toBe(1);
  })
  test('test divide error', ()=> {
    const divi = new functions.Calculador();
    expect(() => divi.divide('5', '5')).toThrow();
  })
  test('test divide', ()=> {
    const divi = new functions.Calculador();
    expect(divi.divide(2,1)).toBe(2);
  })
  test('test multiply error', ()=> {
    const multi = new functions.Calculador();
    expect(() => multi.multiply('5', '5')).toThrow();
  })
  test('test multiply', ()=> {
    const multi = new functions.Calculador();
    expect(multi.multiply(2,1)).toBe(2);
  })
});

test('test capitalize first letter', ()=> {
  expect(functions.capitalize('hello')).toBe('Hello')
})

