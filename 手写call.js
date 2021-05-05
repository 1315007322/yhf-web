Function.prototype.myCall = function (context, ...args) {
  // context = context ? Object(context) : window;
  if (context) {
    context = Object(context);
  } else {
    context = window;
  }

  context.fn = this;

  var result = context.fn(...args);

  delete context.fn;

  return result;
};

// rest 剩余参数
// this, a,b,c

function getName() {
  return this.name;
}

var foo = {
  name: "foo",
};

getName.myCall(foo);
