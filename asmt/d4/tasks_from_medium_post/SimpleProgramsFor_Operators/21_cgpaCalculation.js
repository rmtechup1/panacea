/**
 * Program To Calculate CGPA
 */

let gpaArr = [10,9,9,8,9,7];

let sum = 0;

for(i=0;i<gpaArr.length; i++){
    sum += gpaArr[i];
}

console.log(`List of GPAs across subjects is: ${gpaArr}
CGPA = Avg of GPA rounded to 2 digits, is: ${Math.round(100 * sum/gpaArr.length)/100}`);


// List of GPAs across subjects is: 10,9,9,8,9,7
// CGPA = Avg of GPA rounded to 2 digits, is: 8.67