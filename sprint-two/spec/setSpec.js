describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should have unique values', function() {
    set.add('Gordon Ramsay');
    set.add('Chef Boyardee');
    set.add('Gordon Ramsay');
    expect(set._storage[2]).to.equal(undefined);
  });
  it('should handle values of all types', function() {
    set.add('Mrs. O\'Leary\'s Cow');
    set.add(1871);
    set.add({'city': 'Chicago', 'status': 'On Fire'});
    set.add(['London', 'White House', 'Chicago', 'Vietnam']);
    set.add(true);
    set.add(null);
    expect(set._storage[0]).to.equal('Mrs. O\'Leary\'s Cow');
    expect(set._storage[1]).to.equal(1871);
    expect(JSON.stringify(set._storage[2])).to.equal('{"city":"Chicago","status":"On Fire"}');
    expect(JSON.stringify(set._storage[3])).to.equal('["London","White House","Chicago","Vietnam"]');
    expect(set._storage[4]).to.equal(true);
    expect(set._storage[5]).to.equal(null);
  });
  
});