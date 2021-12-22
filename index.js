const _ = require('lodash');

// Original array
let array1 = [
  [1, 2],
  [4, 5],
  [7, 8],
  [1, 5],
];

let newArray = _.flatten(array1);

console.log(newArray);
