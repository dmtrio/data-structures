var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.sized = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.sized] = value;
    this.sized++;
  },
  pop: function() {
    if (this.sized > 0) {
      this.sized--;
    }
    return this.storage[this.sized];
  },
  size: function() {
    return this.sized;
  }
};