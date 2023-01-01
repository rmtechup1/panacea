/**
 * Power of any number x ^ y.
 */

let tmp = prompt("Exponentiation - enter input as: <base,power>\nEg: to calculate 2^3, type: 2,3");

let input = tmp.split(',').map(x=>+x);

alert(`${input[0]}^${input[1]} = ${input[0]**input[1]}`);


//3^4 = 81