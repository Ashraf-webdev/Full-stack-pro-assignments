// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs

function factorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }

  const result = factorial(5);
  
  console.log(result);
  