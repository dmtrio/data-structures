var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this.value;
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
  if (this.children.length > 0) {
    for (var childNum = 0; childNum < this.children.length; childNum++) {
      if (this.children[childNum].contains(target)) {
        return this.children[childNum].value;
      }
    }
  }
  return 'Not found!';
};

treeMethods.removeFromParent = function(target) {
  if (this.value === target) {
    this.parent = null;                                                                  
    return this;
  } else if (this.children.length > 0) {
    for (var childNum = 0; childNum < this.children.length; childNum++) {
      if (this.children[childNum].contains(target)) {
        var grownUp = this.children[childNum];
        this.children.splice(childNum, 1);
        return grownUp.removeFromParent(target);
      }
    }
  }
  return 'Not found!';

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
