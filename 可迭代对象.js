// Object.getOwnPropertyNames(obj);  返回自身所有非Symbol键
// Object.getOwnPropertySymbols(obj); 返回自身Symbol键
// Object.keys();  返回自身带有enumerable标志的非Symbol键
// for in; 遍历所有带有enumerable的非Symbol, 以及原型上的

// let range = {
//   from: 1,
//   to: 100,

//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// for (let i in range) {
//   console.info(range[i]);
// }
