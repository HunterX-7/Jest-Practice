function stringLength(str) {
  if(str.length<1){
    throw new Error('The string is Empty');
  }
  else if(str.length>10) {
    throw new Error('The string is too long');
  }
  else
  return str.length;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

class Calculador {
  add = (x,y) => {
    if (typeof x !== 'number') throw new Error('The first arguments is not a number');
    if (typeof y !== 'number') throw new Error('The second arguments is not a number');
    return x+y;
  }
  subtract = (x,y) => {
    if (typeof x !== 'number') throw new Error('The first arguments is not a number');
    if (typeof y !== 'number') throw new Error('The second arguments is not a number');
    return x-y;
  }
  divide = (x,y) => {
    if (typeof x !== 'number') throw new Error('The first arguments is not a number');
    if (typeof y !== 'number') throw new Error('The second arguments is not a number');
    if (y === 0) throw new Error('Cannot divide by zero');
    return x/y;
  }
  multiply = (x,y) => {
    if (typeof x !== 'number') throw new Error('The first arguments is not a number');
    if (typeof y !== 'number') throw new Error('The second arguments is not a number');
    return x*y;
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = {stringLength, reverseString, Calculador, capitalize}