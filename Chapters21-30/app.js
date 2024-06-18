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







// Chp 23 : Strings : Finding a Character at a Location