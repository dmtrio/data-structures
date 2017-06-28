var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var smallestValue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var tempStorage = storage[smallestValue];
    delete storage[smallestValue];

    console.log(storage[smallestValue]);
    if (size > smallestValue) {
      smallestValue++;
    }
    return tempStorage;
  };

  someInstance.size = function() {
    return size - smallestValue;
  };

  return someInstance;
};
