// 1
for (var i = 0; i < 10; ++i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// es5 var 在声明前使用不报错， 这种现象叫做变量提升
// es6 let const 在作用域下声明前使用会报错，这种现象叫做暂时性死区
// 有let const会形成块级作用域

// 输出什么，，为什么。 怎么正确输出0-9 为什么，多种方法

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
