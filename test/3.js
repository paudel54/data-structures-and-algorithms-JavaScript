//Check if the input number consists duplicate.

function checkDuplicate(num) {
  let strNum = num.toString();
  let store = {};

  for (let i = 0; i < strNum.length; i++) {
    store[strNum[i]] = (store[strNum[i]] || 0) + 1;
  }

  for (let key in store) {
    if (store[key] > 1) return true;
  }
  console.log(store);
  return false;
}

let num = 43569;
let result = checkDuplicate(num);
console.log("Checking duplicates", result);
