//find the product of array with recursion

function productArray(array) {
  if (array.length === 0) {
    return 1;
  }
  return array[0] * productArray(array.slice(1));
}

let array = [4, 3, 2, 2];
let result = productArray(array);
