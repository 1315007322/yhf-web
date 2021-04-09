// this 这个的意思
1. 方法调用 this指向当前对象
2. 函数调用 总是指向window
3. 构造函数中的this 指向的是实例化的对象
4. call, apply, bind
5. 特殊情况， setTimeout 1）传入是函数 this指向window 2）不是函数 this指向当前对象
6. 箭头函数 没有自身的this

// 1.
// var foo = {
//   name: 'foo',
//   getName: function () {
//     return this.name;
//   }
// }
// // this foo
// foo.getName();

// 2. 没有. 就是window
// var foo1 = foo.getName;
// foo1();

3.
// function Parent(name) {
//   this.name = name;
// }

// var parent = new Parent('父亲');
// console.info(parent)

4.
// call apply 立即执行
// call apply
// fn.call(this, a, v, b)
// apply.call(this, [])

// bind 返回一个新的函数 bind之后的函数没有原型

5.
// var foo = {
//   name: 'foo',
//   getName: function () {
//     setTimeout(console.info(this.name), 1000)
//   }
// }

// 6. function () => { }