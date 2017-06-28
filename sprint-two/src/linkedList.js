var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      if (list.head === null) {
        list.head = Node(value);
      }
    } else {
      list.tail = Node(value);
      list.head.next = list.tail;
    }
  };

  list.removeHead = function() {
    var tempHead = list.head.value;
    console.log(JSON.stringify(list.head.next));
    list.head = list.head.next;
    return tempHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.value !== null) {
      if (currentNode.value === target) {
        return true;
      } else if (currentNode.next !== null) {
        currentNode = currentNode.next;
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

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
