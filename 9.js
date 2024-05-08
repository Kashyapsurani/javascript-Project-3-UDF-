function isPrime(a) {
  var val = 0;
  for (var x = 1; x <= a; x++) {
    if (a % x == 0) {
      val++;
    }
  }
  if (val <= 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPrime(7);
