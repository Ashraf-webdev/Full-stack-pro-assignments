// Q2. Write a program that grades students based on their marks
//  If greater than 90 then A Grade
//  If between 70 and 90 then B Grade
//  If between 50 and 70 then C Grade
//  Below 50 then F Grade

let studentMarks = 65;

if (studentMarks > 90 && studentMarks <= 100) {
    console.log("Your Grade is A");
} else if (studentMarks >= 70 && studentMarks <= 90 ) {
    console.log("Your Grade is B");
} else if (studentMarks >= 50 && studentMarks <= 70) {
    console.log("Your Grade is C");
} else if (studentMarks < 50 && studentMarks >= 0) {
    console.log("Your Grade is F");
} else {
    console.log("Invalid");
}