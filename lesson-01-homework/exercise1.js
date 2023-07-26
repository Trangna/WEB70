function fizzBuzz() {
  let result = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    }
  }
  return result;
}

// Test case
console.log(fizzBuzz());
