// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// let result = sumRange(3);
// console.log(result);

//factorial for loop

// function fact(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total = total * i;
//   }
//   return total;
// }

// console.log("factorial is ", fact(4)); //24

//factorials  of non-negative integer
// function fact(num) {
//   if (num == 1) return 1;
//   return num * fact(num - 1);
// }

// console.log("factorial is ", fact(3)); //6

//Create a recursive function to collect odd values from the list of arrays.

function collectOdd(arr) {
  let store = [];
  //   Here filter is created as a helper function
  function filter(arr) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      store.push(arr[0]);
    }
    filter(arr.slice(1));
  }
  filter(arr);
  return store;
}

let oddValues = collectOdd([1, 2, 3, 4, 5, 6, 9, 10]);
console.log(oddValues);
