//Set  Object method to check the duplicates

let num = [1, 2, 3, 4];

function checkDuplicates(num) {
  let uniqueValue = [...new Set(num)];
  console.log(uniqueValue);
  if (num.length !== uniqueValue.length) {
    return true;
  }
  return false;
}

let result = checkDuplicates(num);
console.log(" the dublicate exists", result);
