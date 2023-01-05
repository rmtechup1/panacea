/**
1. Declare an empty array;
— — — — — — — — — — — — — — -
2. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods=[]

— — — — — — — — — — — — — — — -
3. Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?

let foods=[]

4. Find the length of your foods array
 */



//1
let foods = [];

//2
foods = ['idli',
'dosa',
'kulcha',
'sambar',
'vada',
'naan',
'chapati',
'pickles',
'paneer makhani',
'gobi fry',
'aloo fry',
'behndi fry',
'brinjal fry',
'fruit mix',
'dry fruit mix',
'fruit salad',
'mixed veg curry',
'dal',
'dappalam',
'biryani',
]

//3
//provided it is sorted in descending order and starts with best food
console.log(foods[4]);//this is the fifth favorite

//4
//length of foods array
console.log(foods.length);