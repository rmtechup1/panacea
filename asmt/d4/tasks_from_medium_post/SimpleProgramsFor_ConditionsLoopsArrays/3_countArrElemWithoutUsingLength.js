/**
 * var myarray=[11,22,33,44,55]
 * write a code to count the elements in the array . Don’t use length property
 */

// pop
// forEach + pop
// array out of bounds - will not work
// add a symbol - won't work as it is not iterable
// reverse and check till you come to the first element, count the iterations
// perform a join with a uniquely marking character such as '_' and count the number of them in the string - similar to the guid approach below


// Much simpler solution - because I learnt the basics haphazardly when going thru this asmt / did not recollect this
var myarray = [11, , ,44,55];
let arrLen = 0;

for(i of myarray){
  arrLen++;
}

console.log(arrLen);


// // Implemented: use guids
// var myarray = [11, , ,44,55];
// let arrLen = 0;
// let uuid = null;

// do{
//    uuid = self.crypto.randomUUID();
//    //console.log(uuid);
// }while(myarray.includes(uuid));

// myarray.push(uuid);

// for(i = 0; myarray[i] != uuid; ++i){
//   arrLen++;
// }

// myarray.pop(uuid);

// console.log('arr length =', arrLen, ', arr = ', myarray);

// //arr length = 5 , arr =  Array(5) [ 11, <2 empty slots>, 44, 55 ]
// //Note: if what we need is the num of elements that are not undefined, that can be done too

