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
  if (this.hasOwnProperty('edges')) {
    this.removeEdge(node, null);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var edg = this.edges.length - 1; edg > -1; edg--) {
    if ((this.edges[edg][0] === fromNode && this.edges[edg][1] === toNode) || (this.edges[edg][0] === toNode && this.edges[edg][1] === fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasOwnProperty('edges')) {
    this.edges = [];
  }
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var edg = this.edges.length - 1; edg > -1; edg--) {
    if ((this.edges[edg][0] === fromNode && this.edges[edg][1] === toNode) || (this.edges[edg][0] === fromNode && this.edges[edg][1] === fromNode) || (this.edges[edg][0] === fromNode && toNode === null) || (this.edges[edg][1] === fromNode && toNode === null)) {
      return this.edges.splice(this.edges[edg], 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (!isNaN(key)) {
      cb(this[key].value);
      console.log(JSON.stringify(cb(this[key].value)), this[key].value);
    } 
  }
  
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
