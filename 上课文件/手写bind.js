Function.prototype.myBind = function (context) {
  // 获取剩余参数
  var args = Array.prototype.slice.call(arguments, 1);
  var that = this;

  var Fn = function () {};
  Fn.prototype = this.prototype;

  var res = function (...rest) {
    return that.apply(this instanceof Fn ? this : context, args.concat(rest));
  };
  res.prototype = new Fn();
  return res;
};

function getName() {
  return this.name;
}

var foo = {
  name: "foo",
};

var newGetName = getName.myBind(foo);
console.info(newGetName());
