/**
 * Volume Of Prism (trianlular prism)
 * With height = h, side lengths = a,b,c
 * Volume = Math.sqrt( (a+b+c)*(b+c−a)*(c+a−b)*(a+b−c) )*h/4
 */

[h,a,b,c, ...rest] = prompt("Enter height & side lengths of triangular prism separated by comma\n Eg:\n12,2,4,5")
    .split(',')
    .map(x=>+x);


if(a < 0 || b < 0 || c < 0 || h < 0){
    alert(`invalid input: ${h},${a},${b},${c} , please enter non-negative integers`);
}
else{
    alert(`For a triangular prism of height: ${h} and sides: ${a}, ${b}, ${c}, volume rounded to 4 digits is: ${ Math.round( 10**4 * Math.sqrt( (a+b+c)*(b+c-a)*(c+a-b)*(a+b-c) )*h/4 )/10**4 }`);
}


//TC-1
//For a triangular prism of height: 12 and sides: 2, 4, 5, volume rounded to 4 digits is: 45.5961

//TC-2
//invalid input: 1,2,3,-1 , please enter non-negative integers