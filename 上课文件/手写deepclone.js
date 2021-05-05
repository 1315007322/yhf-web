// JSON.parse() JSON.stringify()
// 值是undefined的属性在转换后会丢失;
// 值是Symbol的属性在转换后会丢失;
// 值是RegExp对象的属性在转换后变成了空对象;
// 值为函数对象的属性在转换后会丢失;
// 值是Date对象的属性在转换后变成字符串;
// 对象的循环引用会报错;

// ;

let s1 = Symbol("s1");

let obj = {
  a: "100",
  b: undefined,
  c: null,
  d: Symbol(2),
  e: /^\d+$/,
  f: new Date(),
  g: true,
  arr: [1, 2, 3],
  school: {
    name: "yhf",
    [s1]: "s1",
  },
  fn: function () {},
};

obj.age = obj;

function deepclone(obj, cache = new WeakMap()) {
  // null undefined date reg
  if (obj === null) return obj;
  if (obj === undefined) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (typeof obj !== "object") return obj;

  if (cache.has(obj)) return cache.get(obj);

  // todo
  // 不直接创建空对象的目的， clone的结果和之前保持相同所属类
  let newObj = new obj.constructor();

  cache.set(obj, newObj);

  // let newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepclone(obj[key], cache);
    }
  }
  // todo symbol
  return newObj;
}

// 1. 没有Set和Map的拷贝
// 2. 递归会消耗大量内存
// 3. symbol

// loadsh
