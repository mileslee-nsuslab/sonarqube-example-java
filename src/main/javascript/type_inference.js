function computeLoop() {
  var total = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      total = i+ j;
    }
  }

  return total.foo();
}

function sum(a, b) {
  return a + b;
}
