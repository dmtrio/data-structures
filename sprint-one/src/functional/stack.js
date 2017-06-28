var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
    
  };

  someInstance.pop = function() {
    var returnVal = storage[size];
    if (size > 0) {
      size--;
    }

    return returnVal;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
