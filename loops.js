function forLoop(ray) {
  var message
  for( var i = 0; i < 25 ; i++) {
    if (i == 1) {message = "I am 1 strange loop"}
    else {message = `I am ${i} strange loops`}
    ray[i - 1] = message
  }
  return ray
}

function whileLoop(number) {}

function doWhileLoop()number {}
