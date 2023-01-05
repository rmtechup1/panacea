/**
 * Find the average in the array below.
Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
 */

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];

let sum = 0;
let count = 0;

friendsInfo.forEach(function(ele){
    if(typeof ele === typeof 0){
        sum += ele;
        ++count;
    }
})

console.log(`Sum of nums only is: ${sum}, count is: ${count} & avg is: ${sum/count}`);

//Sum of nums only is: 37, count is: 5 & avg is: 7.4