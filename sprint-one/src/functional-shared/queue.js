var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.sized = 0;
  newQueue.smallestValue = 0;
  _.extend(newQueue, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newQueue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.sized] = value;
  this.sized++;
};
queueMethods.dequeue = function() {
  var tempStorage = this.storage[this.smallestValue];
  delete this.storage[this.smallestValue];
  if (this.sized > this.smallestValue) {
    this.smallestValue++;
  }
  return tempStorage;
};
queueMethods.size = function() {
  return this.sized - this.smallestValue;
};

