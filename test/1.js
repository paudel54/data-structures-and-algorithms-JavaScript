// Given an array, please write a function to check if a number exists in an array.
//Test = 44
inpArr = [1, 2, 3, 23, 44];
let num = 31;

function test(arr, num) {
  console.log(arr, num);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

let result = test(inpArr, num);
console.log(result);
