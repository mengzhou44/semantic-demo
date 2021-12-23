const _ = require('lodash');

// Original array
let array1 = [
  [1, 2],
  [4, 5],
  [6, 7],
];

let newArray = _.flatten(array1);

console.log(newArray);
