function Parent(name) {
  this.name = name;
  
}

Parent();

var parent = new Parent();
console.info(parent);

function myNew(con, ...args) {
  // 1. 声明一个空对象
  var obj = {};
  // 2. 将对象的原型指向构造函数的原型
  obj.__proto__ = con.prototype;

  // 3. 执行构造函数，并且将this指向空对象   
  const result = con.apply(obj, args);
  // 4. 类型检验构造函数执行结果， 为object 返回， 不为object 将obj返回
  return result instanceof Object ? result : obj;
}

var parent1 = myNew(Parent, "父亲");
console.info(parent1 instanceof Parent);
