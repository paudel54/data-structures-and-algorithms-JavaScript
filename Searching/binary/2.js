// Naive Search =>
//"lorie loled"
//"lol"         => check if the string lol is present in the parent String.

// function naiveSearch(long, short) {
//   var count = 0;
//   for (var i = 0; i < long.length; i++) {
//     for (var j = 0; j < short.length; j++) {
//       //   console.log(long[i], short[j]);
//       if (short[j] !== long[i + j]) {
//         break;
//       }

//       if (j === short.length - 1) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// let result = naiveSearch("orie loledlol", "lol");
// console.log(result);

// "01234", "012";

function matchSearch(given, find) {
  let count = 0;
  for (let i = 0; i < given.length; i++) {
    for (let j = 0; j < find.length; j++) {
      if (find[j] !== given[i + j]) break;

      if (j === find.length - 1) count++;
    }
  }
  return count;
}

let given = "ramramharishyamhari";
let find = "hari";

let result = matchSearch(given, find);
console.log(result);
