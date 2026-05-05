// alert("vSpringboard welcomes you");

// TASK
// Build a marks grade checker.
// Input: marks out of 100
// Output: Grade
//   90 and above → A
//   75 to 89     → B
//   60 to 74     → C
//   40 to 59     → D
//   below 40     → Fail
// Show the result just in console.

let marks = prompt("Enter Marks (marks out of 100) : ");

if (marks >= 90) console.log("Grade A")
else if (marks >= 75) console.log("Grade B")
else if (marks >= 60) console.log("Grade C")
else if (marks >= 40) console.log("Grade D")
else console.log("Grade F")