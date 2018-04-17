'use strict';

const nums = module.exports = {};

nums.add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' ) {
    return null;
  }
  return a + b;
};

nums.sub = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' ) {
    return null;
  }
  return a - b;
};