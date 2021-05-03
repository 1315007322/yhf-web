// promise涉及 then catch finally
/**
 * 1、 Promise的状态一经改变就不能再改变
 2、.then和.catch都会返回一个新的Promise。
3、catch不管被连接到哪里，都能捕获上层未捕捉过的错误。
4、在Promise中，返回任意一个非 promise 的值都会被包裹成 promise 对象，例如return 2会被包装为return Promise.resolve(2)。
4、Promise 的 .then 或者 .catch 可以被调用多次, 但如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值。
6、.then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。
7、.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
8、.then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。
9、.then方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为catch是.then第二个参数的简便写法。
10、.finally方法也是返回一个Promise，他在Promise结束的时候，无论结果为resolved还是rejected，都会执行里面的回调函数。

 * 1、Promise的状态一经改变就不能再改变
 * 2、.then .catch 返回值不能是promise本身 不然会死循环
 * 3、.then .catch 返回非promise的值都会被作为promise对象返回
 * 默认为 promise.resolve('值') 如果想返回reject值  写成 return promise.reject(值)
 * 4、
 */
// const promise = new Promise((resolve, reject) => {
//     resolve("success1");
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     })

/**
 * then:res
 */

// const promise = new Promise((resolve, reject) => {
//     reject("error");
//     resolve("success2");
// });
// promise
//     .then(res => {
//         console.log("then1: ", res);
//     }).then(res => {
//         console.log("then2: ", res);
//     }).catch(err => {
//         console.log("catch: ", err);
//     }).then(res => {
//         console.log("then3: ", res);
//     })
/**
 * 因为catch没有返回值
 * catch: error
 * then3: undefined
 */

// Promise.resolve(1)
//     .then(res => {
//         console.log(res);
//         return 2;
//     })
//     .catch(err => {
//         return 3;
//     })
//     .then(res => {
//         console.log(res);
//     });

/**
 * res 为1 
 * 返回resolve 1
 * res 2
 */

// Promise.reject(1)
//     .then(res => {
//         console.log(res);
//         return 2;
//     })
//     .catch(err => {
//         console.log(err);
//         return 3
//     })
//     .then(res => {
//         console.log(res);
//     });

/**
 * reject 进入 .catch  
 * 打印 1
 * 然后返回 resolve 3
 * 所以后面的 res 打印3
 * 
 * 1
 * 3
 */


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('timer')
//         resolve('success')
//     }, 1000)
// })
// const start = Date.now();
// promise.then(res => {
//     console.log(res, Date.now() - start)
// })
// promise.then(res => {
//     console.log(res, Date.now() - start)
// })
/**
* 同步任务 无
* 执行微任务
* 因为 promise 没有确定状态所以都暂时不执行 then
* 执行宏任务
* 宏任务中 同步任务
* 打印timer
* resolve 上下文  执行then
* 打印 success ,时间-开始时间
* 打印 success ,时间-开始时间
* 
*/
// Promise.resolve().then(() => {
//     return new Error('error!!!')
// }).then(res => {
//     console.log("then: ", res)
// }).catch(err => {
//     console.log("catch: ", err)
// })

/**
 * 抛出异常 error
 * 执行catch catch error
 * 
 * 打印 catch error
 */

// const promise = Promise.resolve().then(() => {
//     return promise;
// })
// promise.catch(console.err)

/**
 * 死循环 
 */

// Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .then(console.log)
/**
*  值透传 1 会传到最后的.then 作为参数
*/
// Promise.reject('err!!!')
//   .then((res) => {
//     console.log('success', res)
//   }, (err) => {
//     console.log('error', err)
//   }).catch(err => {
//     console.log('catch', err)
//   })

/**
 * error ,err!!!
 */

// Promise.resolve('1')
//     .then(res => {
//         console.log(res)
//     })
//     .finally(() => {
//         console.log('finally')
//     })
// Promise.resolve('2')
//     .finally(() => {
//         console.log('finally2')
//         return '我是finally2返回的值'
//     })
//     .then(res => {
//         console.log('finally2后面的then函数', res)
//     })

/**
 * 打印 1
 * 打印 finally 2
 * 
 * 打印finally1
 * 打印 finally2后面的then ,2
 * 
 * 问题： 为什么 finally2 在finally之前打印
 */

// Promise.resolve('1')
// .finally(() => {
//   console.log('finally1')
//   throw new Error('我是finally中抛出的异常')
// })
// .then(res => {
//   console.log('finally后面的then函数', res)
// })
// .catch(err => {
//   console.log('捕获错误', err)
// })
/**
 * .finally 中抛出异常 会直接进入 .catch 或者说  返回 reject
 * 如果不写返回值，默认返回上一个promise的返回值
 * 
 */

function promise1() {
    let p = new Promise((resolve) => {
        console.log('promise1');
        resolve('1')
    })
    return p;
}
function promise2() {
    return new Promise((resolve, reject) => {
        reject('error')
    })
}
promise1()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally1'))

promise2()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally2'))
/**
 * 打印 promise1
 * resolve 执行.then
 *  打印 1
 * 打印finally 1
 * 执行 promise2 catch 打印 error
 * 
 * 执行finallly1 打印finally1
 * 执行 finally2 打印 finally2
 * 
 * 
 * 
 */