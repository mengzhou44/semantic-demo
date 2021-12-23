const _ = require('lodash');

// Original array
let array1 = [
  [1, 2],
  [4, 5],
  [7, 8],
  [9,10]
];

let newArray = _.flatten(array1);

console.log(newArray);
