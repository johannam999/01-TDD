'use strict';

const greet = module.exports = {};

greet.hello = (name) => {
  if (name === '' || typeof name !== 'string'){
    return null;
  }
  if (name === 'World'){
    return 'Hello World!';
  }
return `Hello, ${name}!`;
} 