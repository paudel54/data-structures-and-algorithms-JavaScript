//find the power of number with recursion

function expo(number, pow) {
  console.log(pow);
  if (pow === 0) return 1;
  return number * expo(number, pow - 1);
}

let result = expo(2, 3);
console.log(result);
