var a = 2; -》变量环境
let b = 3; -》 词法环境

function test() { -》变量环境
  let d = 4;  词法环境
  function c() { -》 
    console.info(2)
  }

  c();
}

test();

console.info(11111)
...console.

1. 词法环境   // 保存let const
2. 变量环境   // 保存var function
3. this bind // 绑定this  动态  
4. outer     // 形成作用域链   outer静态  指向外层的



闭包： 就是作用域链的体现。原理就是这个。

symbol

继承：
1. 构造函数继承
2. 原型继承
3. 组合继承
4. 寄生式组合继承