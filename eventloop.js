// setTimeout
// setInterval

for (let i = 0; i < 200000000000000000; i++) {}

setTimeout(() => {
  console.info(1);
}, 1000);

eventloop 事件循环
js 单线程异步

任务： 1. 同步任务， 2. 异步任务

异步任务：
1. 微任务  Promise, async/await, nexttick,
2. 宏任务   setTimeout, setInterval requestAnimationFrame

队列： 先进先出
栈： 后进先出  先进后出

1. 先执行同步任务， 异步任务加入队列，等待 。
2. 同步任务执行完成， 先执行异步任务队列中的微任务，
3. 再去执行宏任务。
4. 循环

