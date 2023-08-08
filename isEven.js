function isEven(number) {
  if (number % 2 === 0) {
    return number + " is even number";
  } else {
    return number + " is odd number";
  }
}

var num = isEven(24);
console.log(num);
