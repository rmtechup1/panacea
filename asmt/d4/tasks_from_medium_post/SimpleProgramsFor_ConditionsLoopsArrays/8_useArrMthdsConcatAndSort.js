/**
 We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

function dataHandling(input){
//Your code goes here
}

dataHandling(friends);
 */

var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran",
];

var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

function dataHandling(list1, list2) {
    let newList = list1.concat(list2);
    newList.sort();
    console.log(newList);
}

dataHandling(friends1, friends2);