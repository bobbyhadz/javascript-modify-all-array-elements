// EXAMPLE 1 - Update all elements in an array in JavaScript

const arr = ['bobby', 'hadz', 'com'];

arr.forEach((element, index) => {
  arr[index] = element + index;
});

console.log(arr); // 👉️ [ 'bobby0', 'hadz1', 'com2' ]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Update all Elements in an Array using `Array.map()`

// const arr = ['bobby', 'hadz', 'com'];

// const newArray = arr.map((element, index) => {
//   return element + index;
// });

// // 👇️ [ 'bobby0', 'hadz1', 'com2' ]
// console.log(newArray);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Update all Elements in an Array using `Array.reduce()`

// const arr = ['bobby', 'hadz', 'com'];

// const newArray = arr.reduce((accumulator, element, index) => {
//   return [...accumulator, element + index];
// }, []);

// // 👇️ [ 'bobby0', 'hadz1', 'com2' ]
// console.log(newArray);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Modify all Elements in an Array using a `for` loop

// const arr = ['a', 'b', 'c'];

// for (let index = 0; index < arr.length; index++) {
//   arr[index] = arr[index] + index;
// }

// console.log(arr); // 👉️ ['a0', 'b1', 'c2']

// ------------------------------------------------------------------

// // EXAMPLE 5 - Set all Array Elements to a Specific Value using `Array.fill()`

// const arr = new Array(3).fill('value');

// // 👇️ ['value', 'value', 'value']
// console.log(arr);
