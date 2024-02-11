// //How can you determine the given numbers num1 and num2 have same frequency of digits?

// let num1 = 65625;
// let num2 = 55662;

// function frequency(num1, num2) {
//   let countNum1 = {};
//   let countNum2 = {};
//   let temp1 = num1.toString();
//   let temp2 = num2.toString();
//   if (temp1.length !== temp2.length) {
//     return false;
//   }
//   for (let i = 0; i < temp1.length; i++) {
//     // console.log(countNum1);
//     countNum1[temp1[i]] = (countNum1[temp1[i]] || 0) + 1;
//   }

//   for (let j = 0; j < temp2.length; j++) {
//     countNum2[temp2[j]] = (countNum2[temp2[j]] || 0) + 1;
//   }

//   for (let key in countNum1) {
//     if (countNum1[key] !== countNum2[key]) return false;
//   }
//   console.log(countNum1, countNum2);
//   console.log(temp1, temp2);
//   return true;
// }

// let result = frequency(num1, num2);
// console.log("Same frequency?", result);

function testFreq(num1, num2) {
  let obj1 = {};
  let obj2 = {};
  let first = num1.toString();
  let second = num2.toString();
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    obj1[first[i]] = (obj1[first[i]] || 0) + 1;
  }
  for (let j = 0; j < second.length; j++) {
    obj2[second[j]] = (obj2[second[j]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  //   console.log(obj1, obj2);

  return true;
}
let num1 = 223399;
let num2 = 232399;

let result = testFreq(num1, num2);
console.log(result);
