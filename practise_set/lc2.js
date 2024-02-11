//solve greatest common divisor problem with JS
// function gcd(a, b) {
//   while (b !== 0) {
//     const temp = b;
//     b = a % b;
//     console.log("check b", b);
//     a = temp;
//   }
//   return a;
// }

// const result = gcd(8, 4);
// console.log(result);

function gcdOfStrings(str1, str2) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const len1 = str1.length;
  const len2 = str2.length;

  const commonLength = gcd(len1, len2);
  const commonSubstring = str1.substring(0, commonLength);

  // Check if the common substring repeats to form both strings
  if (
    str1 === commonSubstring.repeat(len1 / commonLength) &&
    str2 === commonSubstring.repeat(len2 / commonLength)
  ) {
    return commonSubstring;
  } else {
    return "";
  }
}

// Example usage:
const str1 = "ABCABC";
const str2 = "ABC";
const result = gcdOfStrings(str1, str2);
console.log(result); // Output: "ABC"

// function gcd(a, b) {
//     if (b === 0) {
//         return a;
//     } else {
//         return gcd(b, a % b);
//     }
// }

// // Example usage:
// const result = gcd(12, 18);
// console.log(result); // Output: 6

// const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// // Example usage:
// const result = gcd(12, 18);
// console.log(result); // Output: 6
