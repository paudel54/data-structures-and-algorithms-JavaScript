//the fn takes sorted array
//fn should find the first pair whose sum is 0
//[-2,2]
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return {};
// }

// let result = sumZero([-8, -7, -2, -1, 0, 1, 2, 3, 4, 9]);
// console.log(result);

//REFACTOR..........................................Multiple pointer patterns
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let result = sumZero([-8, -7, -2, -1, 0, 1, 2, 3, 4, 8, 9]);
console.log(result);
