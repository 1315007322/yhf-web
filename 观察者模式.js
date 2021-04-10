function Subject() {
  this.state = "不咋地";
  // 观察者数组
  this.observers = [];
}

// 添加观察
Subject.prototype.attach = function (o) {
  if (this.observers.findIndex((item) => item === o) <= -1) {
    this.observers.push(o);
  }
};

// 解除
Subject.prototype.unAttach = function (o) {
  const index = this.observers.findIndex((item) => item === o);
  if (index > -1) {
    this.observers.splice(index, 1);
  }
};

Subject.prototype.setState = function (state) {
  this.state = state;
  this.observers.forEach((o) => o.dispatch(this));
};

function Observer(name) {
  this.name = name;
}

Observer.prototype.dispatch = function (s) {
  console.info(`这是${this.name}, 状态:${s.state}`);
};

const yhf = new Observer("fhf");
const jw = new Observer("jw");

const sub = new Subject();
const sub1 = new Subject();

sub.attach(yhf);
sub.attach(jw);

sub.setState("学习ing");

setTimeout(function () {
  sub.setState("下课");
}, 2000);

sub1.attach(yhf);

sub1.setState("整挺好");
