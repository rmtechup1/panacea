/**
 * Calculate area of an equilateral triangle
 * A = Math.Sqrt(3)*a*a/4
 */

let tmp = prompt("Enter side of equilateral triangle");
let a = +tmp;

alert(`With side: ${a}, 
area of equilateral triangle rounded to 3 digits = ${Math.round( 1000 * Math.sqrt(3)*a*a/4 )/1000}`);

//With side: 6, area of equilateral triangle rounded to 3 digits = 15.588