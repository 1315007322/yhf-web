// 青蛙 一次只能跳一级台阶，也可以跳两级台阶， 问 跳到第n级有多少种跳法；

// 思路：一下就跳到第n级的时候有多少种跳法 n - 1 跳一级 n - 2跳二级

// 一次跳上第一级 1
// 一次跳上第二级 2

// 1. 找到递推表达式
// 2. 找到终止值

// 1.
// function jump(n) {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return jump(n - 1) + jump(n - 2);
// }

// 2.
// const cache = new Map();
// function jump(n) {
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   let result = "";
//   if (cache.has(n)) {
//     result = cache.get(n);
//   } else {
//     result = jump(n - 1) + jump(n - 2);
//     cache.set(n, result);
//   }
//   return result;
// }

// 3;
//


const arr = [1,2,6,3]

arr.reverse()
console.log(arr)