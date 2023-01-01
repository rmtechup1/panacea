/**
 * Calculate Simple Interest
 * I = P*T*R/100
 */


let tmp = prompt("Simple interest calculation\nEnter in the format: Principal,Time,Rate\nEg: 25000,2,2.5");

let inpt = tmp.split(',').map(x=>+x);

alert(`SI for Principal: ${inpt[0]} Rs, Time: ${inpt[1]} Years, Rate: ${inpt[2]}% is = ${inpt[0]*inpt[1]*inpt[2]/100}`);


//SI for Principal: 25000 Rs, Time: 2 Years, Rate: 2.5% is = 1250