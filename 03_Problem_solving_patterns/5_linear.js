// function linear(arr, n) {
//   for (let value of arr) {
//     if (value == n) {
//       return true;
//     }
//   }
//   return false;
// }

// let index = linear([3, 2, 4, 6, 2, 9], 6);
// console.log(index);

// Binary Search for the sorted array

function search(arr, val) {
  // start and end are index of arrays
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("checking mid", mid);
    let midValue = arr[mid];

    if (midValue < val) {
      start = mid + 1;
    } else if (midValue > val) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
}

// let ans = search([2, 8, 4, 1, 9, 7, 21, 24, 30, 5], 24);
let ans = search([1, 2, 4, 9], 9);
console.log(ans);
