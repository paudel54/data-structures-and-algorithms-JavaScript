// function that acceptes two array and return true if every value in the array has it's corroesponding value squared in 2nd array.
//Freq must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctedIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctedIndex === -1) {
      return false;
    }
    arr2.splice(correctedIndex, 1);
  }
  return true;
}

let ans = same([1, 2, 3, 0], [1, 4, 9, 0]);

console.log(ans);

//Refactored

function exact(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

let test2 = exact([1, 2, 2, 3, 5], [1, 4, 4, 9, 25]);
console.log("test2", test2);
