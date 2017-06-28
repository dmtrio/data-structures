var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.sized = 0;
  _.extend(newStack, stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newStack;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.sized] = value;
  this.sized++;
};
stackMethods.pop = function() {
  if (this.sized > 0) {
    this.sized--;
  }
  return this.storage[this.sized];
};
stackMethods.size = function() {
  return this.sized;
};