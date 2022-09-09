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

  const distKM = parseFloat(userInput[0]);

  if(distKM >= 0)
  {
    console.log(distKM * 1000); //KM -> M
    console.log(distKM * 1000* 100); //KM -> Cm
  }
  else{
    console.log("incorrect input");
  }

  //end-here
});

/*
////////////////IP:
5
5.25
0
-1.5
////////////////OP:
5000
500000

5250
525000

0
0

incorrect input
*/