function addUpTo(n){
    let total = 0;
    for(i=1;i<=n; i++){
        total = total + i
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`time interval: ${(t2-t1)/1000} seconds. `)
// 1.5700018 seconds. 

//-------------------------solution 2 -> way smaller number 
// function add(n){
//     return n*(n+1)/2
// }
// let t1 = performance.now();
// add(1000000000);
// let t2 = performance.now();
// console.log(`time interval: ${(t2-t1)/1000} seconds. `)
// 0.000017099999999999226 seconds. 
