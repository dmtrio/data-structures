var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.sized = 0;
  newQueue.smallestValue = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.sized] = value;
    this.sized++;
  },
  dequeue: function() {
    var tempStorage = this.storage[this.smallestValue];
    delete this.storage[this.smallestValue];
    if (this.sized > this.smallestValue) {
      this.smallestValue++;
    }
    return tempStorage;
  },
  size: function() {
    return this.sized - this.smallestValue;
  }
};