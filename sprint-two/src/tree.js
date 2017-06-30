var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var childNum = 0; childNum < this.children.length; childNum++) {
      if (this.children[childNum].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.retrieve = function(target) {
  if (this.value === target) {
    return this;
  } else if (this.children.length > 0) {
    for (var childNum = 0; childNum < this.children.length; childNum++) {
      if (this.children[childNum].contains(target)) {
        return this.children[childNum];
      }
    }
  }
  return 'Not found!';
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
