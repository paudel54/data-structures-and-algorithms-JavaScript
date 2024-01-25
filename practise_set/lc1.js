// merge string alternate
//input=> w1=> tr w2=>best
//output=> tbrest

// function alter(str1, str2) {
//   let store = [];
//   const maxLength = Math.max(str1.length, str2.length);
//   for (let i = 0; i < maxLength; i++) {
//     if (i < str1.length) {
//       store.push(str1[i]);
//     }
//     if (i < str2.length) {
//       store.push(str2[i]);
//     }
//   }
//   return store.join("");
// }

// let store = alter("tr", "best");
// console.log(store);

//making more efficient
function mergeStringsAlternatively(str1, str2) {
  let result = "";
  let i = 0;

  while (i < str1.length || i < str2.length) {
    if (i < str1.length) {
      result += str1[i];
    }
    if (i < str2.length) {
      result += str2[i];
    }
    i++;
  }

  return result;
}

// Example usage:
const mergedString = mergeStringsAlternatively("abc", "12345");
console.log(mergedString); // Output: "a1b2c345"
