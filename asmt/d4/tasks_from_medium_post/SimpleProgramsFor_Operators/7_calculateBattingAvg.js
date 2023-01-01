 /**
 * Calculate Batting Average
 * 
 * BA = ( RunsScored / NumOfTimesOut ), rounded to two decimal points
 */

 let RunsScored = 415;
 let NumOfTimesOut = 32;
 
 console.log (`With ${RunsScored} runs & ${NumOfTimesOut} times out, the Batting Average is: ${Math.round(RunsScored*100 / NumOfTimesOut)/100}`);


 //With 415 runs & 32 times out, the Batting Average is: 12.97