// Chp 11 : Comparison Operators

// if (fullName === "Mark" + " " + "Myers") 
// if (fullName === firstName + " " + "Myers") 
// if (fullName === firstName + " " + "Myers") 
// if (fullName === firstName + " " + lastName)
// if (totalCost === 81.50 + 135) 
// if (totalCost === materialsCost + 135) 
// if (totalCost === materialsCost + laborCost) 
// if (x + y === a - b);


// if( yourTicketNumber !== 487208) {
//     alert("Better luck next time.");
// }


// if(1 > 0) {}
// if(0 < 1) {}
// if(1 >= 0) {}
// if(1 >= 1) {}
// if(0 <= 1) {}
// if(1 <= 1) {}



// MCQ's


// 05 : What is the correct syntax for defining not equal sign

// a. !=          b. !== *          c. !===         d. none of these


// 04 : What is the output of the following code

// var a = "hello";

// var b = "world";

// if(a !== b) {
//     alert("hello world!");
// }

// a. hello      b. world        c. hello world! *         d. none of these


// 03 : What is the difference between == and === sign

// a. == checks equality and === checks equality and data types * 
// b. == checks equality and data types and === checks equality


// 02 : What is the output of the following code

// var a = 1;
// var b = "1";

// if( a == b ) {
//     alert('hello world');
// }

// a. hello world *       b. 1        b. "1"        d. None of these


// 01 : What is the output of the following code

// var a = 1;
// var b = "1";

// if( a === b ) {
//     alert('hello world');
// }

// a. hello world       b. 1        b. "1"        d. None of these *















// Chp 12 : If...else and else if Statements

// var x = prompt("Where does the pope live?");

// if(x === "Vatican") {
//     alert("Correct!");
// }

// if( x !== "Vatican") {
//     alert("Wrong answer");
// }



// if(x === "Vatican") {
//     alert("Correct!");
// }
// else {
//     alert("Worng answer");
// }



// var correctAnswer = "Vatican";

// if(x === correctAnswer) {
//     alert("Correct!");
// }
// else {
//     score--;
//     userIQ = "Problematic";
//     alert("Incorrect!");
// }




// var correctAnswer = "Vatican";

// if(x === correctAnswer) {
//     alert("Correct!");
// }
// else if(x === "Rome") {
//     alert("Incorrect but close");
// }
// else {
//     alert("Incorrect");
// }




// MCQ's


// 05 : else if statement is that statement when chaining of conditions 
//       for checks

// a. true *             b. false



// 04 : else statment will execute when if statement is true

// a. true              b. false * 


// 03 : else statment will execute when if statement is false

// a. true *              b. false



// 02 : What is the output of the following code

// var x = 23;

// if(x === 23) {
//     alert("Correct!");
// }
// else if(x === 20) {
//     alert("Incorrect but close");
// }
// else {
//     alert("Incorrect!");
// }

// a. Correct! *  b. Incorrect but close    c. Incorrect!   d. none of these


// 01 : What is the output of the following code

// var x = 2;

// if(x === 2) {
//     alert("Correct!")
// }
// else {
//     alert("Incorrect!");
// }

// a. Correct! *      b. Incorrect!       c. 2         d. none of these














// Chp 13 : Testing Sets of Conditions

// if(weight > 300 && time < 6) {
//     alert("Come to our tryout!");
// }
// else {
//     alert("Come to our cookout!");
// }



// if(weight > 300 && time < 6 && age > 17 && gender === "male") {
//     alert("Come to our tryout!");
// } 
// else {
//     alert("Come to our cookout!");
// }



// if(SAT > avg || GPA > 2.5 || sport === "football") {
//     alert("Welcome to Bubba State!");
// }
// else {
//     alert("Have you looked into appliance repair?");
// }



// if(age > 65 || age < 21 && res === "U.S.") {}


// if((age > 65 || age < 21) && res === "U.S.") {}


// if(age > 65 || (age < 21 && res === "U.S.")) {}



// MCQ's


// 05 : You can test for a combination of conditions in JavaScript by using...
//        &&   and or operator

// a. true *            b. false



// 04 : You can combine any number of and and or conditions

// a. true *          b. false


// 03 : What is the name of this operator ||

// a. and         b. or *


// 02 : What is the name of this operator &&

// a. and *         b. or


// 01 : What is the output of the following code

// var a = b = c = 12;

// if(a === b && c === a) {
//     alert("Correct!")
// }
// else {
//     alert("Incorrect!");
// }

// a. Correct! *      b. Incorrect!     c. 12        d. none of these













// Chp : 14 : If Statements Nested


// if((x === y || a === b) && c === d ) {
//     g = h;
// }
// else {
//     e = f;
// }



// if(c === d) {
//     if( x === y) {
//         g = h;
//     }
//     else if(a === b) {
//         g = h;
//     }
//     else {
//         e = f;
//     }
// }
// else {
//     e = f;
// }



// MCQ's


// 05 : What is the output of the following code

// var a = 1;
// var b = '1';
// var c = '1';

// if(b === c) {
//     if(a === c) {
//         alert("a === c");
//     }
//     else if(a === b) {
//         alert("a === b");
//     }
//     else {
//         alert("None");
//     }
// }

// a. a === c         b. a === b        c. None *        d. 1


// 04 : What is the output of the following code

// var x = 1;
// var y = 1;
// var a = 3;
// var b = 3;
// var c = 5;
// var d = '6';
// var e = 7;
// var f = 5;


// if(x === y) {
//     if(a === b) {
//         if(c === d) {
//             alert("c === d");
//         }
//         else if(c === e) {
//             alert("c === e");
//         }
//         else if(c === f) {
//             alert("c === f");
//         }
//         else {
//             alert("Nothing c === f");
//         }
//     }
//     else {
//         alert("Nothing a === b");
//     }
// }
// else {
//     alert("Nothing x === y");
// }

// a. c == f *       b. a === b        c. c === d      d. Nothing c === f


// 03 : when things get really complicated, nested ifs are a good way to go.

// a. true *                b. false


// 02 : For readability, a lower level is indented 2 spaces beyond the 
//       level above it.


// a. true *            b. false


// 01 : What is the output of the following code

// var a = b = c = 12;

// if(a === b) {
//     if(b === c) {
//         alert("a = c");
//     }
//     else if(a === c) {
//         alert("a = b = c");
//     }
//     else {
//         alert("a != b != c");
//     }
// }
// else {
//     alert("a != b");
// }


// a. a = c *        b. a = b = c         c. a != b != c        d. a != b















// Chp 15 : Arrays



// var city0 = "Atlanta";
// var city1 = "Baltimore";
// var city2 = "Chicago";
// var city3 = "Denver";
// var city4 = "Los Angeles";
// var city5 = "Seattle";

// alert("Welcome to " + city3);



// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// alert("Welcome to " + cities[3]);



// var mixedArray = [1, "Bob", "Now is", true];



// MCQ's



// 05 : What is the syntax of an array

// a. var fruits []    b. var fruits = [] *    c. fruits var []     d. none


// 04 : An array contains multiple data types values

// a. true *              b. false



// 03 : What is the output of the following code

// var fruits = ["apple", "mango", "orange"];

// alert(fruits[3]);

// a. orange          b. apple         c. mango         d. undefined * 


// 02 : What is the output of the following code

// var fruits = ["apple", "mango", "orange"];

// alert(fruits[0]);

// a. apple *     b. mango         c. orange       d. none of these


// 01 : What is the output of the following code

// var fruits = ["apple", "mango", "orange"];

// alert(fruits[1]);

// a. apple      b. mango *        c. orange       d. none of these















// Chp 16 : Array : Adding and removing elements


// var pets = [];


// pets[0] = "dogs";
// pets[1] = "cats";
// pets[2] = "bird";



// pets[3] = "lizard";
// pets[6] = "snake";



// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";


// pets.pop();


// pets.push("fish", "ferret");



// MCQ's


// 06 : how you assign values to it.

// a. fruits[0]      b. fruits[0] = "apple" *     c. fruits[apple]   d. none


// 05 :  how you declare an empty array.

// a. array []      b. var arr []     c. var arr = [] *    d.none of these


// 04 : What is the output of the following code

// var fruits = [];

// fruits[0] = "graps";
// fruits[1] = "apple";
// fruits[2] = "banana";

// alert(fruits[0]);


// a. apple         b. undefined           c. banana         d. graps *


// 03 : What is the output of the following code
/*
var fruits = ["apple", "mango", "banana", "orange"];

fruits[5] = "graps";

alert(fruits[4]);
*/

// a. apple         b. mango           c. banana         d. undefined *


// 02 : What is the output of the following code

// var fruits = ["apple", "mango", "banana", "orange"];

// fruits[2] = "graps";

// alert(fruits[2]);


// a. apple         b. mango           c. banana         d. graps *


// 01 : What is the output of the following code

// var fruits = ["apple", "mango", "banana", "orange"];

// fruits[4] = "graps";

// alert(fruits[3]);


// a. apple         b. mango           c. banana         d. orange *
















// Chp 17 : Arrays : Removing inserting and extracting elements

// var pets = ["dogs", "cats", "bird"];

// pets.shift();


// pets.unshift("fish", "farret");

// pets.splice(2, 2, "pig", "duck", "emu");


// pets.splice(2, 0, "pig", "duck", "emu");


// pets.splice(2, 2);


// var noPets = pets.slice(2, 4);



// MCQ's


// 05 : What is the output of the following code

// var arr = [1, 2, 3, 4];

// var newArr = arr.slice(1, 3);

// alert(newArr);

// a. [1, 2, 3, 4]       b. [2, 3] *         c. []      d. [1, 3, 4]


// 04 : What is the output of the following code

// var arr = [1, 2, 3, 4];

// var newArr = arr.slice(1);

// alert(newArr);

// a. [1, 2, 3, 4]       b. [2, 3, 4] *         c. []      d. [1, 3, 4]



// 03 : What is the output of the following code

// var arr = [1, 2, 3, 4];

// arr.splice(1, 2);

// alert(arr);

// a. [1, 2, 3, 4]       b. [1, 3] *         c. [1, 4] *     d. [1, 3, 4]


// 02 : What is the output of the following code

// var arr = [1, 2, 3, 4];

// arr.unshift(5);

// alert(arr);

// a. [5, 1, 2, 3, 4] *      b. [1, 2, 3, 4]       c. []      d. [1, 3, 4]


// 01 : What is the output of the following code

// var arr = [1, 2, 3, 4];

// arr.shift();

// alert(arr);

// a. [1, 2, 3, 4]       b. [2, 3, 4] *         c. []      d. [1, 3, 4]
















// Chp 18 : for loops



// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];


// if (cityToCheck === cleanestCities[0]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities"); }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities");
// }
// else {
//     alert("It's not on the list");
// }




// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//     }
// }

/*
let fruits = ["mango", "apple", "banana", "graps"];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/















// Chp : 19 : for loops : Flags , Booleans , array length and loopus 
//               interruptus



// var matchfound = "no";

// var matchFound = "no";
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = "yes";
//         alert("It's one of the cleanest cities");
//     }
// }

// if (matchFound === "no") {
// alert("It's not on the list");
// }



// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//     }
// }

// if (matchFound === false) {
// alert("It's not on the list");
// }



// var matchFound = false;
// for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }

// if (matchFound === false) {
// alert("It's not on the list");
// }


// var numElements = cleanestCities.length;




// var numElements = cleanestCities.length;
// var matchFound = false;

// for (var i = 0; i < numElements; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }

// if (matchFound === false) {
// alert("It's not on the list");
// }



// let trafficLight = ["green", "yellow", "red"];

// let istrafficLight = false;

// for(let i = 0; i < trafficLight.length; i++) {
//     if(trafficLight[i] === "green") {
//         istrafficLight = true;
//         console.log("Green Go");
//         break;
//     }
//     else if(trafficLight[i] === "yellow") {
//         console.log("Yellow Ready");
//     }
//     else {
//         console.log("Red Wait");
//     }
// }


















// Chp 20 : for loops nested



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }
// }




// let x = [1, 2, 3, 4];
// let y = [5, 6, 7, 8];

// for(let i = 0; i < x.length; i++) {
//     console.log(x[i], 'x');

//     for(let j = 0; j < y.length; j++) {
//         console.log(y[i], 'y');
//     }
// }