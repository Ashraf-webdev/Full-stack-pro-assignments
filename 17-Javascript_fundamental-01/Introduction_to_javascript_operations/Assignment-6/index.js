
// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.

const weight = 60;     // weight in kg
const height = 1.73;    // height in meters

// calculate BMI
const bmi = weight / (height * height)

// result
console.log(`BMI : ${bmi.toFixed(2)}`);