function isLeapYear(year) {
  var reminder = year % 4;
  if (reminder === 0) {
    return "This is leap year " + year;
  } else {
    return "This is not leap year " + year;
  }
}

console.log(isLeapYear(2033));
