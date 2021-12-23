const _ = require('lodash');

// Original array
let array1 = [
  [1, 2],
  [4, 5],
  [7, 8],
  [10,11]
];

let newArray = _.flatten(array1);

console.log(newArray);
