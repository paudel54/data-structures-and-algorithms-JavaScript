// function countDown(num) {
//   if (num <= 0) {
//     console.log("All Done captain");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// countDown(3);

//without recursion

function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done");
}

countDown(5);
