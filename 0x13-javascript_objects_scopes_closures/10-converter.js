#!/usr/bin/node
// create a base converter

exports.converter = function (base) {
  return num => num.toString(base);
};
