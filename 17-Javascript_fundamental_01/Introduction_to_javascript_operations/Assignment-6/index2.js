// Define the weight in kilograms and height in meters
const weight = 70;    // Weight in kilograms
const height = 1.75;  // Height in meters

// Calculate BMI
const bmi = weight / (height * height);

// Display the result
console.log(`Weight (kg): ${weight}`);
console.log(`Height (m): ${height}`);
console.log(`BMI: ${bmi.toFixed(2)}`); // Using toFixed(2) to display BMI with two decimal places
