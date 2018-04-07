/* global expect */

describe('ArrayIterator', function () {

  var a;

  beforeEach(function () {
    a = new ArrayIterator([1,2]);
  });

  describe('decorator', function () {
    it('returns the length of the given array', function () {
      expect(a.length).toBe(2);
    });
    it('has the array as prototype', function () {
      expect(a.push).toBeDefined();
    });
    it('delegates the functioncalls to the array ', function () {
      a.push(3);
      expect(a.length).toBe(3);
      expect(a[2]).toBe(3);
    });
  });
    
  describe('get({index})', function () {
    it('returns the item by index', function () {
      expect(a.get(0)).toBe(1);
      expect(a.get(1)).toBe(2);
    });
    
    it('returns the first item if one over the last is requested', function () {
      expect(a.get(2)).toBe(1);
    });
  });
  
  describe('curr()', function () {
    it('returns the current item', function () {
      expect(a.curr()).toBe(1);
    });
  });
  
  describe('next()', function () {
    it('returns the next item', function () {
      expect(a.next()).toBe(2);
    });
    
    it('returns the first item if the current is the last item', function () {
      a.next();
      expect(a.next()).toBe(1);
    });
  });
  
  describe('prev()', function () {
    it('returns prevItem', function () {
      a.prev();
      expect(a.prev()).toBe(1);
    });
    
    it('returns the last item if the current is the first item', function () {
      expect(a.prev()).toBe(2);
    });
  });
  
  describe('walk({steps})', function () {
    
    beforeEach(function () {
      a = new ArrayIterator([1,2,3,4,5]);
    });
    
    it('returns the item +{steps} away', function () {
      expect(a.walk(1)).toBe(2);
      expect(a.walk(3)).toBe(5);
    });
    
    it('returns the item -{steps} away', function () {
      a.walk(3);
      expect(a.walk(-2)).toBe(2);
    });
    
    describe('cycle = true', function () {
      it('cycles through down', function () {
        expect(a.walk(5)).toBe(1);
      });
      
      it('cycles through up', function () {
        expect(a.walk(-1)).toBe(5);
      });
    });
    
    describe('cycle = false', function () {
      
      beforeEach(function () {
        a = new ArrayIterator([1,2,3,4,5], false);
      });
      
      it('stops at the end', function () {
        expect(a.walk(5)).not.toBeDefined();
      });
      
      it('stops at the begin', function () {
        expect(a.walk(-1)).not.toBeDefined();
      });
    });
    
  });
  
});