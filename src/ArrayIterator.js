ArrayIterator = function (array, circle) {

  var position = 0;
  circle = circle === undefined ? true : false;
  
  array.walk = walk;
  array.next = next;
  array.prev = prev;
  array.curr = curr;
  array.get = get;

  return array;
  
  function walk (steps) {
    if (circle) {
      position = (array.length + position + steps) % array.length;
    } else {
      position += steps;
    }
    return curr();
  }
  function next () {
    return walk(1);
  }
  function prev () {
    return walk(-1);
  }
  function get (index) {
    position = circle ? index % array.length : index;
    return curr();
  }
  function curr () {
    return array[position];
  }
  
};
