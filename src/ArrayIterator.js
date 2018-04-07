ArrayIterator = function (array, circle) {

  var counter = 0;
  circle = circle === undefined ? true : false;
  
  array.walk = walk;
  array.next = next;
  array.prev = prev;
  array.curr = curr;
  array.get = get;

  return array;
  
  function walk (steps) {
    if (circle) {
      counter = (array.length + counter + steps) % array.length;
    } else {
      counter += steps;
    }
    return array[counter];
  }
  function next () {
    return walk(1);
  }
  function prev () {
    return walk(-1);
  }
  function curr () {
    return array[counter];
  }
  function get (index) {
    counter = index % array.length;
    return curr();
  }
  
};
