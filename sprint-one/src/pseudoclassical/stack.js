var Stack = function() {
  this.storage = {};
  this.sized = 0; 
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  this.storage[this.sized] = value;
  this.sized++;
    
};
Stack.prototype.pop = function() {
  if (this.sized > 0) {
    this.sized--;
  }
  return this.storage[this.sized];

};
Stack.prototype.size = function() {
  return this.sized;
};