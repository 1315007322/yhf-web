1. __proto__  [[Prototype]]   对象才有
2. prototype   函数才有  __proto__ constructor
3. constructor  // 构造器  对象才有

__proto__ 当去查找一个对象中的属性， 当前对象找不到 会沿着__proto__向上查找 直到 null

prototype 包含可以由特定类型的所有实例共享的属性和方法

// Foo.prototype.constructor = Foo;