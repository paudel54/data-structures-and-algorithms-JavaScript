//search for 3 if found return true.
let numbers = [5, 8, 1, 100, 12, 3, 12];

function searchItem(numbers, val) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === val) return true;
  }
  return false;
}

let result = searchItem(numbers, 3);
console.log(result);
