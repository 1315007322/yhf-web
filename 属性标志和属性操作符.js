// 属性标志
// 1. value 值
// 2. writable true 可以被修改的 false 只读   是否可写
// 3. enumerable true 可以在循环中被列出， false不会  是否可枚举
// 4. configurable true 可以被删除，也被修改  false 不会  是否可配置  单行道 一旦变为false 不能在改成true
// false的作用是防止更改和删除属性标志，但是允许更改对象的值
// 不能修改configurable标志
// 不能修改enumerable标志
// 不能将writable: false改为true 反过来可以
// 不能修改get/set方法

const user = {
  name: "yhf",
  age: 18,
};

// console.info(Object.getOwnPropertyDescriptor(user, "name"));

// Object.defineProperty(user, "name", {
//   writable: false,
//   enumerable: false,
// });

// user.name = "lalala";

// for (let i in user) {
//   console.info("----", i);
// }

// console.info(user);

Object.defineProperties(user, {
  name: { value: "" },
  age: { value: 18 },
});
