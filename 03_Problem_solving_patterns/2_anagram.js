//input 'rata', 'atar' => output 'true' {r:1,a:2,t:1}
//input 'ram', 'amre' => output false
//input '', ''

// function check(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const store = {};

//   for (let i = 0; i < str1.length; i++) {
//     let val = str1[i];
//     store[val] ? store[val]++ : (store[val] = 1);
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let val = str2[i];
//     if (!store[val]) {
//       return false;
//     } else {
//       store[val]--;
//     }
//   }
//   //   console.log(store);
//   return true;
// }

// let result = check("ratru", "urrat");
// console.log(result);

//r=>2, a=>1 t=>1
//-------------------------------------------------------------Method 2
function check(str1, str2) {
  // Convert strings to arrays and sort them
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

let result = check("ratru", "urrat");
console.log(result);

// function check(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }

//     for (let i = 0; i < str1.length; i++) {
//       let found = false;

//       for (let j = 0; j < str2.length; j++) {
//         if (str1[i] === str2[j]) {
//           found = true;
//           break;
//         }
//       }

//       if (!found) {
//         return false;
//       }
//     }

//     return true;
//   }

//   let result = check("ratru", "urrat");
//   console.log(result);
