// 1. 纯函数  固定的输入固定的输出
// 2. 柯里化

const sum = (a, b, c) => {
  return a + b + c;
};

// redux
// reducer 纯函数

function curring(fn, arr = []) {
  let length = fn.length;

  return function (...args) {
    arr = [...arr, ...args];

    if (arr.length === length) {
      return fn(...arr);
    } else {
      return curring(fn, arr);
    }
  };
}

let newSum = curring(sum);

// curry compose pipe
