//Search the number 28 if present on list using binarySearch!!

let numbers = [2, 5, 6, 9, 13, 15, 28, 30];

function binarySearch(numbers, val) {
  let start = 0;
  let end = numbers.length - 1;
  let mid = Math.floor((start + end) / 2);
  //   Checking out an array outbound
  while (numbers[mid] !== val && start <= end) {
    if (val > numbers[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    // reevaluate the mid value after updating the new start and end.
    mid = Math.floor((start + end) / 2);
  }
  if (numbers[mid] === val) {
    return mid;
  }
  return -1;
}

let result = binarySearch(numbers, 50);
console.log(result);
