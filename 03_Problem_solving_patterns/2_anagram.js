//input 'rat', 'atr' => output 'true'
//input 'ram', 'amre' => output false
//input '', ''

function check(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const store = {};

  for (let i = 0; i < str1.length; i++) {
    let val = str1[i];
    store[val] ? store[val]++ : (store[val] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let val = str2[i];
    if (!store[val]) {
      return false;
    } else {
      store[val]--;
    }
  }

  return true;
}

let result = check("ratr", "atrr");
console.log(result);

//r=>2, a=>1 t=>1
