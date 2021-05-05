Function.prototype.myApply = function (context, args) {
  // context = context ? Object(context) : window;
  if (context) {
    context = Object(context);
  } else {
    context = window;
  }

  context.fn = this;

  var result = context.fn(args);

  delete context.fn;

  return result;
};
