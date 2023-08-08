function inchTofeet(inch) {
  var calc = inch / 12;
  return calc;
}

const wallFeet = inchTofeet(240);
const bambooFeet = inchTofeet(300);
console.log(wallFeet);
console.log(bambooFeet);
