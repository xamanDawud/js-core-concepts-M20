function oddSum() {
  let arr = [23, 52, 55, 26, 20, 66, 12];
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(oddSum());
console.log(23 + 52 + 55 + 26 + 20 + 66 + 12);
