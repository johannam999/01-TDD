'use strict';


const greet = require('../lib/greet.js');

describe('greet-test.js', () => {
  describe('greet.hello', () => {
    test('It should return Hello, Name!', () => {
      expect(greet.hello('Joanna')).toEqual('Hello, Joanna!');
    });
    test('It should return null when error', () => {
      expect(greet.hello('')).toEqual(null);
      expect(greet.hello()).toEqual(null);
    });
    test('It should return Hello World when World', () => {
      expect(greet.hello('World')).toEqual('Hello World!');
    });
  });
});
