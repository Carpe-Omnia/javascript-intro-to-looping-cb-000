function forLoop(ray) {
  var message
  for( let i = 0; i < 25 ; i++) {
    if (i === 1) {message = "I am 1 strange loop."}
    else {message = `I am ${i } strange loops.`}
    ray.push(message)
  }
  return ray
}

function whileLoop(number) {
  while (number > -1) {
    if (number > 0) {console.log(`#{number}`)}
    else {console.log("done")}
    number -= 1
  }
}

function doWhileLoop(number) {}
