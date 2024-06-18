// Chp 21 : Changing Case



/*
var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", 
"Tucson", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];
*/


/*
var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();       // toUpperCase()

var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", 
"honolulu"];

for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
  }
}
*/

// cityToCheck = cityToCheck.toUpperCase();












// Chp 22 : Strings : Measuring Length and Extracting Parts



// var firstChar = cityToCheck.slice(0, 1);

// var cityToCheck = "Usamaisrar";

// var someChars = cityToCheck.slice(2, 5);

// console.log(someChars);

// var someChars = cityToCheck.slice(2);

// console.log(someChars);

// console.log(cityToCheck[0]);


/*
var firstChar = cityToCheck.slice(0, 1);
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;
*/


/*
var month = prompt("Enter a month");
var charsInMonth = month.length;         // string.length
if (charsInMonth > 3) {
    monthAbbrev = month.slice(0, 3);
}
*/



/*
var str = prompt("Enter some text");
var numChars = str.length;

for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        Break;
    }
}
*/

// length is 1-beased ,    index no 0-based











// Chp 23 : Strings : Finding Segments

// var text = "The New Yorker magazine doesn't allow the phrase 'World War II' kdfgj kdfgkj kdgf"

// var text = "The New Yorker magazine doesn't allow the phrase fjhjdfg kjdhjhg kjhjhf kdhjgh kdfgj kdfgkj kdgf"

/*
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
        console.log(text);
    }
}
*/

// var firstChar = text.indexOf("World War II");

// console.log(firstChar);


/*
var firstChar = text.indexOf("World War II");

if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + 
    text.slice(firstChar + 12);
}

console.log(text);
*/


/*
var text = "To be or not to be.";
var segIndex = text.lastIndexOf("be");

console.log(segIndex);
*/







// Chp 24 : Strings : Finding a Character at a Location

// var firstName = "Usama";
// var firstChar = firstName.slice(0, 1);

// var firstChar = firstName.charAt(0);

// console.log(firstChar);



// var lastChar = firstName.charAt(firstName.length - 1);

// console.log(lastChar);

/*
for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}
*/











// Chp 25 : Strings : Replacing Characters

/*
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
    }
}
    


var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}
*/



// var newText = text.replace("World War II", "the Second World War");

/*
let myMessage = "Hello I am Usama Israr Khan, and I am 20 years old.";

let myNewMessage = myMessage.replace("20", "21");

console.log(myNewMessage);
*/



// text = text.replace("World War II", "the Second World War");


// var newText = text.replace(/World War II/g, "the Second World War");

/*
let myMessage = "Hello I am Usama Israr Khan, and I am 20 years old.";

let myNewMessage = myMessage.replace(/I am 20 years old./g, "I have a girlfriend");

console.log(myNewMessage);
*/












// Chp 26 : Rounding Numbers

// var numberOfStars = Math.round(scoreAvg);

/*
let myNum1 = 23.25;
let myNum2 = 23.75;

let myNumRound = Math.round(myNum2);

console.log(myNumRound);
*/

// scoreAvg = Math.round(scoreAvg);
/*
var scoreAvg = Math.round(.0678437);


var scoreAvg = Math.ceil(.000001);      // round up

var scoreAvg = Math.floor(.999999);     // round down
*/











// Chp 27 : Generating Random Numbers


// var randomNumber = Math.random();

/*
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
*/










// Chp 28 : Converting Strings into integers and decimals


// var currentAge = prompt("Enter your age.");


// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;


// var profit = "200" - "150";


// var profit = "200" - "duck";
// console.log(profit);


// var result = "200" + 150;


// var currentAge = prompt("Enter your age.");
// var qualifyingAge = currentAge + 1;


/*
var currentAge = prompt("Enter your age.");
var qualifyingAge = parseInt(currentAge) + 1;


var myInteger = parseInt("1.9999");
console.log(myInteger);

var myFractional = parseFloat("1.9999");
console.log(myFractional);
*/












// Chp 29 : Converting strings to numbers, numbers to strings


/*
var integerString = "24"
var num = Number(integerString);

console.log(num);
*/


/*
var floatingNumString = "24.9876";
var num = Number(floatingNumString);

console.log(num);
*/


/*
var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();

console.log(numberAsString);
*/










// Chp 30 : Controlling the length of decimals


/*
var total = price + (price * taxRate);

var prettyTotal = total.toFixed(2);

var currencyTotal = "$" + prettyTotal;

var prettyTotal = total.toFixed();
*/


/*
var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2);
*/