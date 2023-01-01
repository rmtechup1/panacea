/**
 * Calculate five test scores and print their average
 */

const ip = prompt("Provide test scores in all 5 subjects separated by a comma <,>");

let scores = ip.split(',').map(x => +x);

let avg = 0;

for(i=0; i < scores.length; ++i){
    avg += scores[i];
}

avg = Math.round(avg*100/scores.length)/100;

alert(`List of scores: ${scores} and average is: ${avg}`);