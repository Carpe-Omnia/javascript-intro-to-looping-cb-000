function forLoop(ray) {
  var message
  for( let i = 1; i < 25 ; i++) {
    if (i === 0) {message = "I am 1 strange loop"}
    else {message = `I am ${i } strange loops`}
    ray.push(message)
  }
  return ray
}

function whileLoop(number) {}

function doWhileLoop(number) {}
