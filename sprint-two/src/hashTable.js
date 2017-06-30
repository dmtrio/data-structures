

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined || this._storage.get(index)[0][0] === k) {
    this._storage.set(index, [[k, v]]);
  } else {
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var bucket = 0; bucket < this._storage.get(index).length; bucket++) {
    if (this._storage.get(index)[bucket][0] === k) {
      return this._storage.get(index)[bucket][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index)[0].splice(0, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


