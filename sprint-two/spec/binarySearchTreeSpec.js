describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });
  
  it('should fail for non-numeric values', function() {
    binarySearchTree.insert([0, 1, 2]);
    binarySearchTree.insert(true);
    binarySearchTree.insert(null);
    binarySearchTree.insert(undefined);
    binarySearchTree.insert({'1': 2, '3': 4});
    expect(binarySearchTree.contains([0, 1, 2])).to.equal(false);
    expect(binarySearchTree.contains(true)).to.equal(false);
    expect(binarySearchTree.contains(null)).to.equal(false);
    expect(binarySearchTree.contains(undefined)).to.equal(false);
    expect(binarySearchTree.contains({'1': 2, '3': 4})).to.equal(false);
    expect(binarySearchTree.contains(5)).to.equal(true);
  });
  
});
