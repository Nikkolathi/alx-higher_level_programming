#!/usr/bin/node
// return occurrences of a number in a list
exports.nbOccurrences = function (list, searchElement) {
  return (list.filter(e => e === searchElement).length);
};
