/**
 * Give the Actual cost and Sold cost, Calculate Discount Of Product
 * 
 * Discount         = (actual-sold)
 * Discount Percent = (actual-sold)*100/actual
 */

[a,s,...rest] = prompt(`Enter actual price and selling price separated by comma for calculating discount.
Eg: 2400,1899`).split(',').map(x=>+x);

alert(`With actual price: ${a}, selling price: ${s}, 
Discount = ${a-s} and Discount Percent rounded to 2 digits = ${ Math.round( 100 * (a-s)*100/a )/100}%`);



//With actual price: 2500, selling price: 1899, 
//Discount = 601 and Discount Percent rounded to 2 digits = 24.04%