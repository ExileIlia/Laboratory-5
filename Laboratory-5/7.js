function findMax() {
    var max = Number.NEGATIVE_INFINITY;
  
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
  
    return max;
  }
  
  var result = findMax(5, 10, 3, 8);
  console.log(result); // Виведе 10