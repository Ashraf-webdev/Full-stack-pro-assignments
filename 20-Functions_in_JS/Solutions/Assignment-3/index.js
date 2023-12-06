// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.

(function square() {
    let number = 8;
    const calculateSquareNumber = number * number;
    console.log(`The square of ${number} is : ${calculateSquareNumber}`);
})();