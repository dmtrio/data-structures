

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined || this._storage.get(index)[0][0] === k) {
    this._storage.set(index, [[k, v]]);
    this.size++;
  } else {
    this._storage.get(index).push([k, v]);
  }
  this.checkPercentageFull('add');  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
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
  this.size--;
  this.checkPercentageFull('remove');  
};

HashTable.prototype.checkPercentageFull = function(addOrRemove) {
  var tempStorage = this._storage;
  if (this.size / this._limit >= .75 && addOrRemove === 'add') {
    this._limit = this._limit * 2;
    this.size = 0;
    this.reHashTable(tempStorage);
  }
  if (this.size / this._limit <= .25 && addOrRemove === 'remove') { 
    this._limit = this._limit / 2;
    this.size = 0;
    this.reHashTable(tempStorage);
  }

};
HashTable.prototype.reHashTable = function(tempStorage) {
  var newLimit = LimitedArray(this._limit);
  var lim = this._limit;
  newLimit.size = 0;
  tempStorage.each(function(storageIndex, index, storage) {
    if (storageIndex !== undefined) {
      for (var i = storageIndex.length - 1; i >= 0; i--) {
        var key = storageIndex[i][0];
        var value = storageIndex[i][1];
        var indexx = getIndexBelowMaxForKey(key, lim);
        if (newLimit.get(indexx) === undefined) {
          newLimit.set(indexx, [[key, value]]);
          newLimit.size++;
        } else {
          newLimit.get(indexx).push([key, value]);
        }      
      }
    }
  });
  this._storage = newLimit;
  this.size = newLimit.size;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


