/**
 * Given their radius of a circle and find its diameter, circumference and area.
 */

let r = 23.21; //radius

console.log(`With a circle of radius: ${r},
Diameter                          = ${2*r},
Circumference rounded to 4 digits = ${Math.round(10**4 * 2*Math.PI*r)/10**4},
Area rounded to 4 digits          = ${Math.round(10**4 * Math.PI*r**2)/10**4}`);


// With a circle of radius: 23.21,
// Diameter                          = 46.42,
// Circumference rounded to 4 digits = 145.8327,
// Area rounded to 4 digits          = 1692.3888