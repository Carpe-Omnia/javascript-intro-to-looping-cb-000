function forLoop(ray) {
  var message
  for( var i = 0; i < 25 ; i++) {
    if (i === 0) {message = "I am 1 strange loop"}
    else {message = `I am ${i + 1} strange loops`}
    ray[i] = message
  }
  return ray
}

function whileLoop(number) {}

function doWhileLoop(number) {}
