/**
 * Find area of a triangle.
 * 
 * Area = base*height/2
 */

[b, h, ...rest] = prompt(`To calculate the triangle's area, 
enter base length & height from base separated by comma.
Eg: 12,3.4`).split(',').map(x=>+x);

if(b < 0 || h < 0){
    alert(`Invalid input: ${b},${h} , enter non-negative values`)
}
else{
    alert(`If triangle's base is: ${b} & height from base is: ${h}, 
its area rounded to 4 digits is = ${ Math.round(10**4 * b*h/2)/10**4 }`);
}


//TC-1
//If triangle's base is: 12 & height from base is: 3.5, its area = 21


//TC-2
//If triangle's base is: 12 & height from base is: 2.231, 
//its area rounded to 4 digits is = 13.386