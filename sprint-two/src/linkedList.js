var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null && list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else if (list.tail === list.head) {
      list.tail = Node(value);
      list.tail.previous = list.head;
      list.head.next = list.tail;
    } else {
      list.tail.next = Node(value);
      var tempTail = list.tail;
      list.tail = list.tail.next;
      list.tail.previous = tempTail;
    }
  };
  list.addToHead = function(value) {
    if (list.head === null && list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else if (list.head === list.tail) {
      list.head = Node(value);
      list.head.next = list.tail;
      list.tail.previous = list.head;
    } else {
      list.head.previous = Node(value);
      var tempHead = list.head;
      list.head = list.head.previous;
      list.head.next = tempHead;
    }
  };

  list.removeHead = function() {
    var tempHead = list.head.value;
    list.head = list.head.next;
    if (list.head && list.head.previous !== null) {
      
      list.head.previous = null;
    }
    return tempHead;
  };
  
  
  list.removeTail = function() {
    var tempTail = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail && list.tail.next !== null) {
      
      list.tail.next = null;
    }
    return tempTail;
  };

  list.contains = function(target) {
    var currentNode = list.tail;
    while (currentNode.value !== null) {
      if (currentNode.value === target) {
        return true;
      } else if (currentNode.previous !== null) {
        currentNode = currentNode.previous;
      } else {
        return false;
      }
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
