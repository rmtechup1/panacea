// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  const ipNum = parseInt(userInput[0]);

  let factorial = 1;
  let p = 1;
  while(p <= ipNum){
    factorial = factorial * p;
    p = p+1;
  }

  console.log(factorial);
  //end-here
});