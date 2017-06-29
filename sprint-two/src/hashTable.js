

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('this _storage', JSON.stringify(this._storage));
  // delete this._storage.get(index);

  this._storage.each(function(item, indexCall, storageCall) {
    if (item !== undefined) {
      if (storageCall[indexCall] === storageCall[index]) {
        storageCall.splice(indexCall, 1);
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


