// Naive Approach to solve bubble sort.
//check if left number if greater than right swap and increment counter and check for next in list.
function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

let numbers = [5, 3, 4, 1, 2];

let result = bubbleSort(numbers);
console.log("Sorted number", result);

function bbSort(arr) {
  var noSwap;
  for (var i = arr.length; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}
