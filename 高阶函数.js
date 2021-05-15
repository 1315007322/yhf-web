// 判断一个变量是否是数组
// instanceof
const a = [1, 2, 3];

const b = {};

const c = new Date();

// 高阶函数
function type(o, b) {
  return function (type) {
    return function () {
      return Object.prototype.toString.call(o) === `[object ${type}]`;
    };
  };
}

// 偏函数
const checkType = type(a);

console.info();
console.info(type(a)("object"));
console.info(checkType("Array"));

type(a, b)("string");
// 高阶组件
// connect(mapStatetopros, mapDispatchtoProps)(B);
