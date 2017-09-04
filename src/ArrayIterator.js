ArrayIterator = function (array, circle) {

  var counter = 0;
  circle = circle === undefined ? true : false;
  
  var obj = {
    length: array.length,
    
    walk: walk,
    next: next,
    prev: prev,
    curr: curr,
    get : get
  };
  
  for (var i = 0; i < array.length; i++) {
    obj[i] = array[i];
  }
  
  return obj;
  
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
  };
  function prev () {
    return walk(-1);
  };
  function curr () {
    return array[counter];
  };
  function get (index) {
    counter = index % array.length;
    return curr();
  }
  
};
