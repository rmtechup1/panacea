/**
 * myobject = {1:one,”11":1,”name”:”arun”}console.log(myobject.11); 
console.log(myobject.name);

Add a new key value pair to myobject
key : ten
value : ten
 */

myobject = {1:'one','11':1,'name':'arun'};

myobject["ten"] = "ten";

console.log(myobject);

//Object { 1: "one", 11: 1, name: "arun", ten: "ten" }