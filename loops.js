function forLoop(ray) {
  var message
  for( let i = 0; i < 25 ; i++) {
    if (i === 1) {message = "I am 1 strange loop"}
    else {message = `I am ${i } strange loops.`}
    ray.push(message)
  }
  return ray
}

function whileLoop(number) {}

function doWhileLoop(number) {}
