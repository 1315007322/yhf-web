// 1.
var point = {
  x: 0,
  y: 0,
  moveTo: function (x, y) {
    var moveX = function (x) {
      this.x = x;
    };

    var moveY = function (y) {
      this.y = y;
    };
    moveX(x);
    moveY(y);
  },
};
point.moveTo(1, 1);
console.log(point.x);
console.log(point.y);

// 2.
var point = {
  x: 0,
  y: 0,
  moveTo: {
    moveX: function (x) {
      this.x = x;
    },

    moveY: function (y) {
      this.y = y;
    },
  },
};
point.moveTo.moveX(1);
point.moveTo.moveY(1);
console.log(point.x);
console.log(point.y);
console.log(x);
console.log(y);
