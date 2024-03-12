/*
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04
*/

// JavaScript program to calculate the average marks

// Input marks of the five subjects
const [mathMarks, bioMarks, chemMarks, physMarks, banglaMarks] = [
  75.25, 65, 80, 35.45, 99.5,
];

// Calculate the total marks
const totalMarks = mathMarks + bioMarks + chemMarks + physMarks + banglaMarks;

// Calculate the average marks
const averageMarks = totalMarks / 5;

// Print the result with 2 decimal places
console.log(averageMarks.toFixed(2));
