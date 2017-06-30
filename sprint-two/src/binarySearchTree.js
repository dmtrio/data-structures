var BinarySearchTree = function(value) {
  var searchTree = {};
  var treeItems = []; 
  searchTree.insert = function(value) {
    treeItems.push(value);
    var toTree = function(value, tree) {
      if (!tree.value) {
        tree.value = value;
      } else if (value < tree.value) {
        if (!tree.left) {
          tree.left = {};
        } 
        toTree(value, tree.left);
      } else if (value > tree.value) {
        if (!tree.right) {
          tree.right = {};
        }
        toTree(value, tree.right);
      }
    };
    toTree(value, searchTree);
  };
  searchTree.contains = function(value) {
    var search = function(value, tree) {
      if (tree === undefined) {
        return false;
      } else if (value === tree.value) {
        return true;
      } else if (value < tree.value) {
        return search(value, tree.left);
      } else if (value > tree.value) {
        return search(value, tree.right);
      }
    };
    
    return search(value, this);
  };
  searchTree.depthFirstLog = function(func) {
    for (var index = 0; index < treeItems.length; index++) {
      func(treeItems[index]);
    }
  };
  searchTree.insert(value); 
  return searchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
