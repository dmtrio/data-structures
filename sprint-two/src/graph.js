// Instantiate a new graph
var Graph = function() {
  var newGrap = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var counter = Object.keys(this).length;
  var nodes = {};
  nodes.value = node;
  this[counter] = nodes;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var index = 0; index < Object.keys(this).length; index++) {
    if (this[index].value === node) {
      return true;
    } 
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var index = 0; index < Object.keys(this).length; index++) {
    if (this[index].value === node) {
      delete this[index];
    } 
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromEdge = false;
  var toEdge = false;
  for (var index = 0; index < Object.keys(this).length; index++) {
    if (this[index].edgeWith === fromNode) {
      toEdge = true;
    } 
    if (this[index].edgeWith === toNode) {
      fromEdge = true;
    }
  }
  if (fromEdge && toEdge) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var index = 0; index < Object.keys(this).length; index++) {
    if (this[index].value === fromNode) {
      this[index].edgeWith = toNode;
    } else if (this[index].value === toNode) {
      this[index].edgeWith = fromNode;
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var index = 0; index < Object.keys(this).length; index++) {
    if (this[index].edgeWith === fromNode) {
      delete this[index].edgeWith;
    } else if (this[index].edgeWith === toNode) {
      delete this[index].edgeWith;
    }
  }  

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (!isNaN(key)) {
      console.log(this[key].value);
      console.log(cb.apply(this[key].value, arguments));
    }
  }
  
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
