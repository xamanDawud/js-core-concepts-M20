function factorial() {
  let result = 1;
  for (var i = 1; i <= 9; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial());
