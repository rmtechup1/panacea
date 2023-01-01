/**
 * Volume Of Sphere
 *  V = (4/3) * Math.PI * radius**3
 */

let r =  Number( prompt("Enter radius of sphere, r, to find its volume") );

alert(`For a sphere of radius: ${r}, volume rounded to 4 digits is: ${ Math.round( 10**4 * (4/3)*Math.PI*r**3)/10**4}`);


//For a sphere of radius: 3.5, volume rounded to 4 digits is: 179.5944