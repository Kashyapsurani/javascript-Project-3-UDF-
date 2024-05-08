function isLeapYear(a   ) {
  if (a % 4 == 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

var sum = isLeapYear(2020);
console.log(sum);
