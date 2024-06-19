// Chp 31 : Getting the current date and time


// var rightNow = new Date();

// var dateString = rightNow.toString();


/*
var rightNow = new Date();
var theDay = rightNow.getDay();

console.log(theDay);
*/

/*
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

console.log(nameOfToday);
*/











// Chp 32 : Extracting parts of the date and time


// var d = new Date();
// var currentMonth = d.getMonth();

// console.log(currentMonth);


// var dayOfMonth = d.getDate();
// console.log(dayOfMonth);


// var currYr = d.getFullYear();
// console.log(currYr);


// var currentHrs = d.getHours();
// console.log(currentHrs);


// var currMins = d.getMinutes();
// console.log(currMins);


// var currSecs = d.getSeconds()
// console.log(currSecs);


// var currMills = d.getMilliseconds();
// console.log(currMills);


// var millsSince = d.getTime();
// console.log(millsSince);











// Chp 33 : Specifying the date and time


// 1 var today = new Date();

// 2 var doomsday = new Date("June 30, 2035");


/*
3 var msToday = today.getTime();
4 var msDoomsday = doomsday.getTime();
*/


// 5 var msDiff = msDoomsday - msToday;

// 6 var dDiff = msDiff / (1000 * 60 * 60 * 24);

// dDiff = Math.floor(dDiff);


/*
1 var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
2 var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));
*/


// var d = new Date("July 21, 1983 13:25:00");











// Chp 34 : Changing elements of a date and time


// var d = new Date();
// d.setFullYear(2001);


// var d = new Date();
// d.setMonth(11);


// var d = new Date();
// d.setDate(15);


// var d = new Date();
// d.setHours(13);


// var d = new Date();
// d.setMinutes(05);


// var d = new Date();
// d.setSeconds(55);


// var d = new Date();
// d.setMilliseconds(867);











// Chp 35 : Functions

/*
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("time: " + theHr + ":" + theMin);


tellTime();


function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("Current time: "+ theHr + ":" + theMin);
}
    

tellTime();
*/











// Chp 36 : Functions : Passing them data 

/*
function greetUser() {
    alert("Hello, there.");
}


greetUser("Hello, there.");


function greetUser(greeting) {
    alert(greeting);
}


var greeting = "Hello, there."
greetUser(greeting);
*/

/*
function greetUser(greeting) {
    alert(greeting);
}
    

var whatever = "Hello, there.";
greetUser(whatever);


var almostAMil = 999999;
showBigNum(almostAMil);


showBigNum(999999);


function showMessage(m, string, num) {
    alert(m + string + num);
}


var month = "March";
showMessage(month, "'s winner number is ", 23);
*/













// Chp 37 : Functions : Passing data back from them

/*
var orderTot;

if (merchTot >= 100) {
    orderTot = merchTot;
}
else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
}
else {
    orderTot = merchTot + 5 + (.03 * (merchTot - 50));
}


function calcTot(merchTot) {

    var orderTot;

    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }

    return orderTot;
}
*/

/*
var totalToCharge = calcTot(79.99);


var totalToCharge = 85.00;

var totalToCharge = merchTotal;

var totalToCharge = merchTotal + ship + tax;


var totalToCharge = calcTot(79.99);


alert(calcTot(79.99));


var orderTot = merchTot + calcTax(merchTot);


var tot = calc(merchTot, calcTax(merchTot));


function calcTot(price) {
    return price + calcShip(price);
}
*/












// Chp 38 : Functions : Local vs. Global variables

/*
var theSum;
addNumbers();


function addNumbers() {
    theSum = 2 + 2;
}
    
alert(theSum);
*/

/*
function addNumbers() {
    var theSum = 2 + 2;
}
    
alert(theSum);
*/

/*
var theSum = 1000;
addNumbers();


function addNumbers() {
    var theSum = 2 + 2;
}
    

var theSum = addNumbers();


function addNumbers() {
    var theSum = 2 + 2;
    return theSum;
}
*/













// Chp 39 : Switch Statements : How to start them


/*
if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
    alert("Whoopee!");
}
else if (dayOfWk === "Fri") {
    alert("TGIF!");
}
else {
    alert("Shoot me now!");
}
*/

/*
switch(dayOfWk) {
    case "Sat" :
        alert("Whoopee");
        break;
    case "Sun" :
        alert("Whoopee");
        break;
    case "Fri" :
        alert("TGIF!");
        break;
    default :
        alert("Shoot me now!");
}
*/













// Chp 40 : Switch Statements : How to complete them

/*
switch(dayOfWk) {
    case "Sat" :
        alert("Whoopee");
        break;
    case "Sun" :
        alert("Whoopee");
        break;
    case "Fri" :
        alert("TGIF!");
        break;
    default :
        alert("Shoot me now!");
}
*/


/*
default :
    alert("Shoot me now!");
}
*/