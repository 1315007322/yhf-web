const Event = {
  eventList: [],
  on: function (key, fn) {
    if (!this.eventList[key]) {
      this.eventList[key] = [];
    }

    this.eventList[key].push(fn);
  },
  emit: function (key, data) {
    (this.eventList[key] || []).forEach((item) => {
      item(data);
    });
  },
  off: function (key, fn) {
    if (!fn) this.eventList[key] = [];

    const index = (this.eventList || [])[key].findIndex((item) => item === fn);
    if (index > -1) {
      this.eventList[key].splice(index, 1);
    }
  },
};
