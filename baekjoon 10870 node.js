const fs = require("fs");
const n = fs.readFileSync("/dev/stdin");
function fibonacci(n){
    if(n == 0) return 0;
    else if(n == 1) return 1;
    else return fibonacci(n-1) + fibonacci(n-2);
}  //재귀함수를 이용하여 풀이 

console.log(fibonacci(n));