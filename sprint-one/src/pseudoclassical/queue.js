var Queue = function() {
  this.storage = {};
  this.sized = 0; 
  this.smallestValue = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.sized] = value;
  this.sized++;
    
};
Queue.prototype.dequeue = function() {
  var tempStorage = this.storage[this.smallestValue];
  delete this.storage[this.smallestValue];
  if (this.sized > this.smallestValue) {
    this.smallestValue++;
  }
  return tempStorage;

};
Queue.prototype.size = function() {
  return this.sized - this.smallestValue;
};