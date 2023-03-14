// JS Cheat Sheet

// On page script
// <script type = 'text/javascript'></script>


// External script
// <script scr='file.js'></script>


// Variables
/*
The var statement declares a function-scoped or globally-scoped variable, 
optionally initializing it to a value. Wherever they occur, they are processed 
before any code is executed. This is called Hoisting.
*/
var a;
var b = 'init'

/*
The const declaration creates block-scoped constants. The value of a constant 
can't be changed through reassignment and it can't be redeclared. 
 */
const ab = 12;
// However, if a constant is an object or array its properties or items can be updated or removed.
const c = [1,2,3,4,5]
c.pop()
console.log(c)

/*
let allows you to declare variables that are limited to the scope of a block statement, 
or expression on which it is used. It can only be accessed after its declaration is reached.
*/
let d = [1,2,3,4,5]
d = [6,7,8,9]
console.log(d)


// Values
false, true // boolean
18 // number, int 
3.141592 // number, float
'hello' // string
null //null (declared)
undefined //undefined (unexpected)
// [] array (typeof object)
// {key:value} object



// Operators
/*
Logic: && (and), || (or), ! (not)
Arithmetic: +(sum) -(subs) *(mult) /(division) %(module) ++(add one) --(substract one)
= asign, == equals, === strictly equals (including type)
!= unequal, !== strict unequal
< (less than) <=(less or equal) >(grater than) >=(greater or equal)
*/


// Strings
let str = 'abcded'
//concat
let word= 'Hello' + ' ' + 'world' 
word.concat(' ', str)
let abc = "I don't \n know" // \n new line
let len = str.length;
console.log(len)
str.indexOf('d') // index of first occurance character in str (if it doesn't exist -1)
str.lastIndexOf('d') // last occurance
str.slice(1,3) //new substr including from first position indicated to before the last
str.toUpperCase() // convert to upper case
str.toLowerCase() // convert to lower case
str.charAt(3) // character at index 
str.split(',') // str to array
str.trim() //  removes whitespace from both ends of a string and returns a new string


// Numbers
let pi = 3.141692
pi.toFixed(0) // returns 3
pi.toFixed(2) // returns 3.14...
pi.toPrecision(2) // returns 3.1
pi.valueOf() // returns number
Math.max((1, 3, 2)) // returns 3
Math.min((1, 3, 2)) // returns 1
Math.round(4.4) // returns 4
Math.pow(2,8) // returns 2 to the power of 8 -> 256
Math.sqrt(49) // returns square root
Math.abs(-3.14) // returns absolute value -> 3.14
Math.ceil(3.14) // returns 4
Math.floor(3.14) // returns 3
Math.random() // returns random number between 0 and 1
Math.floor(Math.random()*5) + 1 // random int from 1 to 5
let b = Number('123')// converts to number -> b = 123


// Arrays
let animals = new Array('dog', 'cat', 'bear', 'ant', 'jaguar')
animals[1] // returns element at indez 1 -> 'cat'
animals[3] = 'shark' // change value of element at index 3 -> 'ant' for 'shark'
animals.toString() // converts array into string
animals.join(' ') // converts array into string separating by character
animals.pop() // removes and returns last elements of array
animals.push('wolf') // adds new element to the end
animals.shift() // removes first element of array
animals.unshift('eagle') // adds new element at the beginning of array
delete animals[0] // changes element at index to undefined
animals.slice(1,4) // elements at portion of array
animals.splice(1, 0, 'turtle'); // Inserts at index 1
animals.splice(2, 1, 'spider'); // Replaces 1 element at index 2
let plants = ['flower', 'grass', 'bush']
animals.concat(plants) // join arrays -> animals + plants
animals.sort() // elements sorted in alphabetical order or ascendant order
animals.reverse() // elements in reversed order
let numbers = [5,2,6,8,3,2,9]
numbers.sort((a,b) => {return a-b}) // numeric sort

// Every
/* tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.*/
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// Expected output: true

// FIlter
/* creates a shallow copy of a portion of a given array, filtered down to just the elements 
from the given array that pass the test implemented by the provided function.*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// Find
/* returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.*/
const array2 = [5, 12, 8, 130, 44];
const found = array2.find(element => element > 10);
console.log(found);
// Expected output: 12

// forEach
/* Executes a provided function once for each array element.*/
const array3 = ['a', 'b', 'c'];
array3.forEach(element => console.log(element));
/* Expected output: "a"
Expected output: "b"
Expected output: "c"*/

// from
/* Creates a new, shallow-copied Array instance from an iterable or array-like object.*/
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]

// includes
/* determines whether an array includes a certain value among its entries, returning true or false as appropriate */
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('at'));
// Expected output: false

// map
/* Creates a new array populated with the results of calling a provided function on every element in the calling array */
const array4 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//reduce
/* The reduce() method executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value. */
const array5 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array5.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// Expected output: 10

// some
/* Tests whether at least one element in the array passes the test implemented by the provided function.
It returns true if, in the array, it finds an element for which the provided function returns true;
 otherwise it returns false. It doesn't modify the array. */
 const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true


// Objects

// Constructor
new Object(value)
Object(value) // If the value is null or undefined, it creates and returns an empty object.

let student = {                 // object name
    firstName:"Jane",           // list of properties and values
    lastName:"Doe",
    age:18,
    height:170,
    fullName : function(){     // object function (cannot be arrow function)
       return console.log(this.firstName + " " + this.lastName);
    }
    }; 
//student.age = 19;           // setting value
nameStudent = student.fullName();  // call object function
console.log(nameStudent)

// entries
/* The Object.entries() static method returns an array of a given object's own enumerable string-keyed 
property key-value pairs. */
const object1 = {
    a: 'somestring',
    b: 42
  };
  
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
/* Expected output:
"a: somestring"
"b: 42"*/

// keys
/* The Object.keys() static method returns an array of 
a given object's own enumerable string-keyed property names. */
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
  };
console.log(Object.keys(object2));
  // Expected output: Array ["a", "b", "c"]

// values
/* The Object.values() static method returns an array of a given object's 
own enumerable string-keyed property values.*/
const object3 = {
    a: 'somestring',
    b: 42,
    c: false
  };
console.log(Object.values(object3));
// Expected output: Array ["somestring", 42, false]
  


// Loops



// If else and Switch



//JSON
