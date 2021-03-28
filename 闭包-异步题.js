// 1
// for (var i = 0; i < 10; ++i) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

// 输出什么，，为什么。 怎么正确输出0-9 为什么，多种方法
// 输出的结果为 10个10 ,因为js执行步骤
// 1、执行同步任务，
// var i;
// for(i = 0;i<10;++i){
  // 加入队列
// }
  //   console.log(i);  10   *10次  队列任务  都是 全局的 i


  // 现在的问题 是 每一次执行延时任务 都是访问的 全局变量 i
  // 就是 在将setTime方法 加入队列的时候 保留一下 当前的i的值
  //1、将i 用let声明，产生暂时性死区
  // for (let i = 0; i < 10; ++i) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }
//2、用函数保留当前作用域，的方式，保留作用域链

  // for (var i = 0; i < 10; ++i) {
  //   (function (i){
  //     setTimeout(function () {
  //       console.log(i);
  //     }, 0);
  //   })(i)
  // }

  // 方法2






// 2
function Foo() {
  var i = 0;
  return function () {
    console.info(i++);
  };
}

var f1 = Foo();
var f2 = Foo();
f1();
f1();
f2();

// 输出什么，为什么

// 0
// 1
// 0

/**
 * 1、f1 f2在变量环境中 栈中的 变量值为 Foo()函数
 * 2、f1()执行一次，则栈中的对应的f1的作用域
 * 3、所以 两次 f1() 都是用的同一个作用域 i为 0  1
 * 4、同理 f2()执行完 为 0    因为 ++i 下一次 才能+1
 */

