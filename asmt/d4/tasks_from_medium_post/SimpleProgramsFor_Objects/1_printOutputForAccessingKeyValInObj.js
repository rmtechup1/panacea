/**
 * What the output

myobject = {1:one,'11':1,'name':'arun'}console.log(myobject.11); 
console.log(myobject.name);
 */





myobject = {1:one,'11':1,'name':'arun'};

console.log(myobject.11); 
console.log(myobject.name);

// as per given, we get an error:
// Uncaught SyntaxError: missing ) after argument list    debugger eval code:10:20
/**
 * This is because 1:one - we let it be as a function instead of accurately writing it as a string.
 */

//----------------------------------------

//If we change the same:
myobject1 = {1:'one','11':1,'name':'arun'};

console.log(myobject1.11); 
console.log(myobject1.name);

//we again get a similar error:
//Uncaught SyntaxError: missing ) after argument list
/**
 * Dot notation requires keys to be valid identifiers. We have given a number, that too not in a string format. 
 */