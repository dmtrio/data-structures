var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var addEnds, removeEnd, directions;
  
  list.addToTail = function(value) {
    ends = ['tail', 'head'];
    directions = ['next', 'previous'];
    addTo(value);
  };
  list.addToHead = function(value) {
    ends = ['head', 'tail'];
    directions = ['previous', 'next'];
    addTo(value);
  };

  var addTo = function(value) {
    if (list[ends[0]] === null && list[ends[1]] === null) {
      list[ends[1]] = Node(value);
      list[ends[0]] = list[ends[1]];
    } else if (list[ends[0]] === list[ends[1]]) {
      list[ends[0]] = Node(value);
      list[ends[0]][directions[1]] = list[ends[1]];
      list[ends[1]][directions[0]] = list[ends[0]];
    } else {
      list[ends[0]][directions[0]] = Node(value);
      var tempEnd = list[ends[0]];
      list[ends[0]] = list[ends[0]][directions[0]];
      list[ends[0]][directions[1]] = tempEnd;
    }
  };
  
  list.removeHead = function() {
    removeEnd = 'head';
    directions = ['previous', 'next'];
    return remove();
  };
  
  
  list.removeTail = function() {
    removeEnd = 'tail';
    directions = ['next', 'previous'];
    return remove();
  };
  
  var remove = function() {
    var tempEnd = list[removeEnd].value;
    list[removeEnd] = list[removeEnd][directions[1]];
    if (list[removeEnd] && list[removeEnd][directions[0]] !== null) {
      list[removeEnd][directions[0]] = null;
    }
    return tempEnd;
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
