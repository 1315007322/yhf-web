// 1. 构造函数继承
// function Parent() {
//   this.name = "Parent";
// }

// Parent.prototype.getName = function () {
//   return this.name;
// };

// function Child() {
//   Parent.call(this);
//   this.type = "child";
// }

// const child = new Child();
// 缺点： 无妨访问父类原型上的属性和方法；

// 2. 原型链继承
// function Parent() {
//   this.message = {
//     age: 18,
//     name: 'Parent',
//   };
// }

// Parent.prototype.getMessage = function () {
//   return this.message;
// };

// function Child() {
//   this.type = "child";
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// const child = new Child();
// const child1 = new Child();
// 缺点 1. 如果父类中的引用类型的变量进行修改，所有子类都会变 2. 无法从子类像父类传参，类似super

// 3. 组合继承
// function Parent() {
//   this.message = {
//     age: 18,
//     name: "Parent",
//   };
// }

// Parent.prototype.getMessage = function () {
//   return this.message;
// };

// function Child() {
//   Parent.call(this);
//   this.type = "child";
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// const child = new Child();
// const child1 = new Child();
// 缺点： 父类的Parent构造函数会执行两次  并且子类原型中有两份相同的属性和方法

// 4. 寄生式组合继承
// function Parent() {
//   this.message = {
//     age: 18,
//     name: "Parent",
//   };
// }

// Parent.prototype.getMessage = function () {
//   return this.message;
// };

// function Child() {
//   Parent.call(this);
//   this.type = "Child";
// }

// Child.prototype = Object.create(Parent.prototype);

// Child.prototype.constructor = Child;
// const child = new Child();
