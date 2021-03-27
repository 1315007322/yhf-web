// 1
for (var i = 0; i < 10; ++i) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

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
