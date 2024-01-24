//-> soution 1

// function uniqueCount(arr) {
//   const count = new Set(arr).size;
//   return count;
// }

// let result = uniqueCount([1, 2, 2, 3, 3, 3, 5, 6]);
// console.log(result);

// function uniqueCount(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // isUnique flag to control count var after completing for loop.
//     let isUnique = true;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       count++;
//     }
//   }
//   return count;
// }

// let result = uniqueCount([1, 2, 2, 3, 3, 3, 5, 6]);
// console.log(result);

//-----------------How I thought

// function countElement(arr) {
//   let store = {};
//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];

//     if (!store[key]) {
//       store[key] = true;
//     }
//   }
//   console.log(store);
//   return Object.keys(store).length;
// }

// let result = countElement([1, 2, 2, 3, 3, 3, 5, 6, 8]);
// console.log(result);

//Two pointer solution
console.log("Two pointer solution");
