## Iterating over a JSON using all for-loops (for, for in, for of, forEach)

Index
1. [About JSON](#About-JSON)
2. [Some contextual info](#Some-contextual-info)
3. [Structure of a JSON string](#Structure-of-a-JSON-string)
4. [Iterating with various for loops](#Iterating-with-various-for-loops)
5. [References](#References)
---

### About JSON:
* JSON is a text-based format for representing structured data based on JavaScript object literal syntax.
* JSON exists as a string. It contains only properties and no methods.
* JSON needs to be deserialized if our code (in any language that supports JSON) needs to access the structured data contained in the format.
* Serialization: Converting native object to a string.
* Deserialization: Converting a string back to a native object.
* A built-in JSON object is available in JS with two methods: parse() for deserialization & stringify() for serialization.
* Usage: JSON.parse() and JSON.stringify() respectively


### Some contextual info:
* Several programming environments (languages) provide the ability to parse (read) and generate JSON. 
* Being a string, it is well suited for transmitting data across a network. 
* A JSON string can be stored in its own file, which is basically just a text file with an extension of ".json", and a MIME type of "application/json".


### Structure of a JSON string:
* A JSON string can be on the lines of a JS Object, a JS Array or even a number, a plain string, true, false or null.
* RFC8259, the latest RFC on JSON format confirms the same: *"A JSON text is a serialized value. Note that certain previous specifications of JSON constrained a JSON text to be an object or an array. Implementations that generate only objects or arrays where a JSON text is called for will be interoperable in the sense that all implementations will accept these as conforming JSON texts."*

### Iterating with various for loops:
#### for:
```
const jsonInput = '{"name":"John", "age":30, "car":null}';

var jsonObj = JSON.parse(jsonInput);

const keysArr = Object.keys(jsonObj);

for(let i=0; i < keysArr.length; i++){
  console.log(`Key value pair #${i+1}:- ${keysArr[i]}: ${jsonObj[keysArr[i]]}`);
}
```

#### for..in:
```
const jsonInput = '{"name":"John", "age":30, "car":null}';

var jsonObj = JSON.parse(jsonInput);

// for..in iterates over all enumerable string properties of an object
for(tmpKey in jsonObj){
  console.log(`${tmpKey}: ${jsonObj[tmpKey]}`);
}
```

#### for..of
```
// for..of iterates over values defined for itration in the 'iterable' object.
// output if we use for..of on jsonObj:- TypeError: jsonObj is not iterable
```







### References:
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
* https://stackoverflow.com/questions/16955215/why-json-result-could-be-boolean-instead-of-object-or-array/16955349
* https://stackoverflow.com/questions/18419428/what-is-the-minimum-valid-json
* https://datatracker.ietf.org/doc/html/rfc8259
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
* for, for..in, for..of: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
