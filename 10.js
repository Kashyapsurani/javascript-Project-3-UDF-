var sum = 1;
function calculateFactorial(fectorial) {
  for (x = 1; x <= fectorial; x++) {
    sum = sum * x;
  }
  return sum;
}

var s = calculateFactorial(5);
console.log(s);
