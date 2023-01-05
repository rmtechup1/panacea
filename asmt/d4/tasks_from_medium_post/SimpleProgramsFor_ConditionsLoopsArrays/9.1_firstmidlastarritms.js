/**
 *  Get the first item, the middle item and the last item of the array
 */

let arr = [1,2, , 4, ,5];

console.log(`first element is: ${arr[0]}`)

if(arr.length % 2 === 0){
  console.log(`middle elements are: ${arr[(arr.length/2)-1]} & ${arr[(arr.length)/2]}`);
}else{
  console.log(`middle element is: ${arr[(arr.length)/2]}`);
}

console.log(`last elem is: ${arr[arr.length - 1]}`);


// //TC1: let arr = [1,2, , 4, ,5]
// first element is: 1
// middle elements are: undefined & 4
// last elem is: 5

// //TC2: let arr = [1,2, , 4, ,]
// first element is: 1
// middle element is: undefined
// last elem is: undefined