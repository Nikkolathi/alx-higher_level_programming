#!/usr/bin/node
// 5-square.js with inheritance
module.exports = class Square extends require('./4-Rectangle.js') {
  constructor (size) {
    super(size, size);
  }
};
