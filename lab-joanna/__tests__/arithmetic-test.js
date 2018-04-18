'use strict';

const nums = require('../lib/arithmetic');

describe('testing nums.add', () => {
  test('should return added numbers', () => {
    const a = 4;
    const b = 6;
    expect(nums.add(a, b)).toEqual(10);
  });
  test('nums.add should return null if error', () => {
    expect(nums.add(null, 4)).toBeNull();
    expect(nums.add(5, null)).toBeNull();
  });  
});

describe('testing nums.sub', () => {
  test('should return subtracted numbers', () => {
    const a = 10;
    const b = 6;
    expect(nums.sub(a, b)).toEqual(4);
  });
  test('nums.sub should return null', () => {
    expect(nums.add(null, 4)).toBeNull();
    expect(nums.add(5, null)).toBeNull();
  });
});
