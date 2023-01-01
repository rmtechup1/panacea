/**
 * Area Of Isosceles Triangle
 * A = base*height/2
 */

[base, height, ...rest] = prompt("Enter base & height for Isosceles Triangle Area\nEg: 12,9").split(',');

alert(`With an isosceles triangle of base: ${base} & height: ${height}, area rounded to three digits is: ${Math.round( 1000 * base*height/2)/1000}`);


//With an isosceles triangle of base: 12.22552 & height: 12, area rounded to three digits is: 73.353