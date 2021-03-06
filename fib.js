//without memoization
/*const fib=(n)=>{
    // if(n==3){
    //     console.log(n);
    // }
    if(n <= 2) return 1;
    return fib(n-1)+fib(n-2);
}*/
//time complexity:O(2^n)
//space complexity: O(n): height of tree

//with memoization
//js object, keys will be arg to fn, value will be return value
const fib=((n,memo={})=>{
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n]=fib(n-1,memo)+fib(n-2,memo);
    return memo[n];

})
//time complexity:O(n)
//space complexity: O(n): height of tree
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));