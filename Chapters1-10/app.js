// Chp 01 : Alert 

// alert('Thanks for your input!');       // best practice

// alert ( "Thanks for your input!" ) ;   // bad practice

// window.alert('Another way to display alert box!');



/* Sure! Here are 10 complex multiple-choice questions (MCQs) on the alert 
function in JavaScript, covering various aspects such as behavior, usage in 
different contexts, and integration with other JavaScript concepts. */


// 10 : Consider the following code snippet. What will be the output 
//      sequence of the alert.

// async function asyncFunc() {
//     await new Promise(resolve => setTimeout(resolve, 0));
//     alert('Async 1');
// }

// function syncFunc() {
//     alert('Sync 1');
// }

// alert('End');


/* A. "Async 1", "Sync 1", "End"

B. "Sync 1", "End", "Async 1"    🟢

C. "Sync 1", "Async 1", "End"

D. "End", "Sync 1", "Async 1" */


// 09 : When running the following script, what will be displayed in the alert
//     dialog.

// const obj = {
//     toString() {
//         return 'Custom object string';
//     },

//     valueOf() {
//         return 42;
//     }
// };

// alert(obj);

// a. Custom object string 🟢   b. 42      c. [object object]    d.undefined


// 08 : What will be the output sequence of the following code

// alert('Start');
// setTimeout(function() { alert('Timeout 1') }, 1000);
// setTimeout(function() { alert('Timeout 2') }, 0);
// alert('End');

/* A. "Start", "Timeout 2", "End", "Timeout 1"

B. "Start", "End", "Timeout 2", "Timeout 1"  🟢

C. "Start", "Timeout 1", "Timeout 2", "End"

D. "Start", "Timeout 2", "Timeout 1", "End" */



// 07 : How does the alert function behave when called within an event 
//     listener attached to a DOM element that is rapidly clicked multile times

// document.getElementById('myButton').addEventListener('click', () => {
//     alert('Button clicked!');
// });

/* A. Each click queues a new alert dialog, and they will appear one after 
       the other as the user closes each one.    🟢

B. Only the first click will trigger the alert, and subsequent clicks will 
    be ignored until the user closes the first alert.

C. The alert dialogs will overlap, causing multiple dialogs to be open 
    simultaneously.

D. The alert function will debounce the clicks, showing only one alert 
regardless of the number of clicks. */




// 06 : What is the effect of calling alert inside a try...catch block if an 
//     error is thrown before the alert is reached

// try {
//     throw new Error('Test Error');
//     alert('This will not work');
// }
// catch(e) {
//     alert('Error caugh');
// }

/* A. The alert inside the try block will be displayed first, then the 
       error will be caught and the alert inside the catch block will be 
       displayed.

B. The alert inside the try block will not run, and only the alert inside 
    the catch block will be displayed.   🟢

C. Neither alert will be displayed due to the error.

D. Both alerts will be displayed regardless of the error. */


/* 05 : What happens if you invoke the alert function in a web worker?

A. The alert will be displayed, but it will not block the main thread.

B. The alert will be displayed and will block the main thread until the user 
    closes it.

C. The alert will not be displayed, and an error will be thrown.

D. The alert function is not available in web workers, and calling it will 
   have no effect.   🟢
*/


/* 04 : In which of the following scenarios is using alert considered poor 
       practice?

A. Displaying an important message that requires immediate user attention.

B. Debugging code during development to quickly show variable values.

C. Informing users about the successful completion of an operation.

D. Displaying error messages to users in a production environment.  🟢
*/


/* 03 : What is the primary difference between alert and console.log in 
    terms of user experience and application performance?

A. alert provides a non-blocking way to display messages to the user, while 
    console.log blocks the event loop.

B. alert blocks the event loop and requires user interaction to proceed, 
   while console.log does not block the event loop and is intended for 
   debugging purposes. 🟢

C. alert can handle complex data structures, whereas console.log can only 
   display strings.

D. alert is used for debugging purposes, while console.log is used for 
   displaying messages to the user. 
*/


// 02 : Consider the following code snippet. What will be the output 
//     sequence of the alerts

// console.log('A');

// setTimeout(() => alert('B'), 0);

// Promise.resolve().then(() => alert('C'));

// alert('D');

// console.log('E');

/* a. "A", "D", "E", "C", "B" 🟢

b. "A", "E", "D", "C", "B"

c. "A", "D", "E", "B", "C"

d. "A", "D", "C", "E", "B" */


/* 01 : When using the alert function inside an asynchronous function, how 
    does it behave with respect to the javascript event loop

a. it executes immediately, blocking the event loop until the user closes
    the alert dialog  🟢

b. It gets queued in the event loop and executes only after all other 
    synchronous code has finished executing.

c. It executes only after all asynchronous operations are completed.

d. It does not block the event loop and allows other code to execute 
   simultaneously.
*/















// Chp 02 : Variables for String

// var name = "Mark";

// name = "Ace";

// var nationality;         // declare a variable

// nationality = "USA";

// var floogle = "Mark";


// var lessonAuthor = "Mark";

// var  guyWhoKeepsSayingHisOwnName = "Mark";

// var x = "Mark";

// var nickname = "Bub";

// alert("Thanks for your input!");

// var thanx = "Thanks for your input!";

// alert(thanx);



// MCQ'S

// 01 : What is the correct syntax to declare variable

// a. var        b. var name; *       c. var name = "Mark"     d. varName;



// 02 : What is the output of the following code

// var name = "Mark";

// name = "Doe";

// console.log(name);

// a. Mark         b. Doe *         c. Mark Doe       d. MarkDoe


// 03 : Find out the error in this code

// varName;

// Name = "Mark";

// console.log(Name);

// a. Name          b. var           c. varName *       d. Mark


// 04 : What is the output of the following code

// var firstName = "Mark";

// var lastName = "Doe";

// console.log(firstName > lastName);

// a. true *       b. false       c. ReferenceError      d. none of these


// 05 : What is the correct syntax for string

// a. var name = 'Mark';              b. var name = `Mark`;
// c. var name = "Mark";              c. All of above *


// 06 : What is the ouput of the following code

// var name = Mark;

// console.log(name);

// a. Mark        b. undefined      c. ReferenceError *     d. TypeError


// 07 : What kind of variable is this

// name = "Mark";

// a. declaration and initialization   b. declaration but not initialization
// c. not declaration but initialization *    d. only declaration


// 08 : What is the correct case for create a variable

// a. camelCase    b. snake_case     c. PascalCase   d. kababcase 
// e. All of above *



// 09 : What is the output of the following code

// var 1stPresident = "Washington";

// console.log(1stPresident);

// a. ReferenceError    b. TypeError     c. SyntaxError *    d. Washington














// Chp 03 : Variables for Numbers

// var weight = 150;

// weight + 25;

// var originalNum = 23;

// var newNum = originalNum + 7;    // 30



// var originalNum = 23;

// var numToBeAdded = 7;

// var newNum = originalNum + numToBeAdded;


// var originalNum = 90;

// originalNum = originalNum + 10;


// var originalNum = "23";

// var newNum = originalNum + 7;       // concatenation   237


// Illegal variable name

// var 1stPresident = "Washington";

// console.log(1stPresident);



// legal variable name 

// var prexWhoCame1st = "Washington";

// alert(144);

// var caseQty = 144;

// alert(caseQty);




// MCQ'S

// 01 : What is the output of the following code

// var num = 23;

// console.log(num);

// a. num        b. 23 *         c. log          d. var


// 02 : What is the output of the following code

// var num = 23;

// var secondNum = 12;

// var result = num + secondNum;

// console.log(result);

// a. 23         b. 12           c. 35 *          d. undefined



// 03 : What is the output of the following code

// var myNum = 23;

// var myNum2 = "23";

// var result = myNum + myNum2;

// console.log(result);

// a. 23        b. 46         c. 2346 *          d. undefined



// 04 : What is the correct syntax for daclaring a variable
  
// a. var          b. let           c. const           d. All of them * 



// 05 : What is the output of the following code

// var myVar = 12;

// var myVar2 = "Mark";

// console.log(myVar > myVar2);

// a. true         b. false *



// 06 : What is the output of the following code

// var myVar = 12;

// var myVar2 = "Mark";

// console.log(myVar2 > myVar);

// a. true            b. false *


// 07 : What is the type of this variable

// var myVar = "32";

// console.log(typeof myVar);

// a. number         b. string *         c. null       d. undefined



// 08 : What is the output of the following code

// var myVar = 123Mark;

// console.log(myVar);


// a. 123        b. Mark          c. 123Mark         d. SyntaxError * 














// Chp 04 : Variable Names Legal and Illegal

// MCQ's 

// 01 : What is the convensional way for naming a variable

// a. camelCase *     b. PascalCase       c. snake_case      d. kababcase


// 02 : A variable name can't contain any spaces.

// a. true *            b. false


// 03 : A variable name can contain only letters, numbers, dollar signs, 
//      and underscores

// a. true *             b. false


// 04 : Though a variable name can't be any of JavaScript's keywords, it 
//      can contain keywords.
//      For example, userAlert and myVar are legal. 

// a. true *             b. false


// 05 : Variable names are case sensitive

// a. true *            b. false



// 06 : Is this variable are legal or illegal

// var myVar1;

// a. legal *          b. illegal


// 07 : Is this variable are legal or illegal

// var 12myVar;

// a. legal             b. illegal * 


// 08 : Is this variable are legal or illegal

// var $123myVar;

// a. legal *             b. illegal


// 09 : Is this variable are legal or illegal

// var &123myVar

// a. legal              b. illegal * 



// 10 : Is this variable are legal or illegal

// var _123myVar;

// a. legal *            b. illegal

















// Chp 05 : Math Expresions : familier operators


// var popularNumer = 4;

// var popularNumer = 2 + 2;

// alert(2 + 2);

// var popularNumer = 12 - 24;     // -12

// console.log(popularNumer);


// var popularNumer = 3 * 12;      // 36

// var num = 10;

// var popularNumer = num + 200;


// var num = 10;

// var anotherNum = 1;

// var popularNumer = num + anotherNum;      // 11


// var whatsLeftOver = 10 % 3;        // answer is remainder   1

// var whatsLeftOver = 9 % 3;        // answer is remainder   0



// MCQ's


// 01 : % is the modulus operator.

// a. true *          b. false



// 02 : It gives you the remainder when the division is executed.

// a. true *           b. false



// 03 : It doesn't give you the result of dividing one number by another

// a. true *             b. false



// 04 : What is the following code is the Math epressions

// var num = 12;

// var num2 = 23;

// var result = num + num2;

// a. true *         b. false



// 05 : What is the output of the following code

// var num = 12;

// var anotherNum = 2;

// var result = num % anotherNum;

// console.log(result);


// a. 0 *        b. 1          c. 6             d. 24
















// Chp 06 : Math Expresions : unfamilier operators


// num++;

// num = num + 1;


// num--;


// var num = 1;

// var newNum = num++;


// var num = 1;

// var newNum = ++num;


// var num = 1;

// var newNum = num--;


// var num = 1;

// var newNum = --num;


// MCQ's

// 01 : What is the output of the following code

// var num = 1;

// var newNum = num++;

// console.log(num, newNum);

// a. 1, 2         b. 1, 1         c. 2, 1 *          d. 0, 1


// 02 : What is the output of the following code

// var num = 1;

// var newNum = ++num;

// console.log(num, newNum);

// a. 1, 2          b. 2, 1          c. 2, 1         d. 2, 2 * 


// 03 : What is the output of the following code

// var num = 1;

// var newNum = num--;

// console.log(num, newNum);

// a. 1, 0        b. 0, 1 *           c. 2, 1         d. 0, 0



// 04 : What is the output of the following code

// var num = 1;

// var newNum = --num;

// console.log(num, newNum);

// a. 1, 0         b. 0, 1        c. 0, 0 *           d. 1, 1


// 05 : What is the name of this sign ++num

// a. post increment                  b. pre increment *
// a. post decrement                  b. pre decrement


// 06 : What is the name of this sign num++

// a. post increment *                b. pre increment
// a. post decrement                  b. pre decrement


// 07 : What is the name of this sign num--

// a. post increment                  b. pre increment
// a. post decrement *                b. pre decrement


// 08 : What is the name of this sign --num

// a. post increment                  b. pre increment 
// a. post decrement                  b. pre decrement *















// Chp 07 : Math Expressions : Eliminating Ambiguity

// var totalCost = 1 + 3 * 4;

// console.log(totalCost);


// var totalCost = 1 + (3 * 4);      // 13


// var totalCost = (1 + 3) * 4;      // 16


// var resultOfComputation = (2 * 4) * 4 + 2;    // 34 


// resultOfComputation = ((2 * 4) * 4) + 2;      // 34


// resultOfComputation = (2 * 4) * (4 + 2);      // 48



// MCQ's

// 01 : What is the output of the following code

// var num = 2 + 4 * 2 - 4 / 2;

// console.log(num);

// a. 4          b. 8 *           c. 2          d. -2


// 02 : What is the output of the following code

// var num = (3 * 2) * 4 - 1;

// console.log(num);

// a. 23 *        b. 18           c. -18           d. 0


// 03 : What is the output of the following code

// var num = 5;

// var newNum = 3 * num - 4 / 2;

// console.log(newNum);

// a. 13 *           b. 9            c. 10.5         d. -9



// 04 : What is the output of the following code

// var num1 = 12;

// var num2 = 3;

// var num3 = 6;

// var result = num2 - num3 / num2 * num2 + num1;

// console.log(result);


// a. 9 *           b. 12          c. 3          d. 6


// 05 : What is the output of the following code

// var num1 = 12;

// var num2 = 3;

// var num3 = 6;

// var result = (((num2 * num3) * num2 - num1) + num3) - num1 % num3;

// console.log(result);

// a. 48 *          b. 50             c. 52            d. 46














// Chp 08 : Concatenating Text String

// alert("Thanks for your input!");

// var message = "Thanks for your input!";

// alert(message);


// alert("Thanks " + userName + "!");


// var message = "Thanks, ";

// var banqer = "!";

// alert(message + userName + banqer);


// alert("Thanks, " + "Susan" + "!");


// var message = "Thanks, ";

// var userName = "Susan";

// var banqer = "!";

// var customMess = message + userName + banqer;

// alert(customMess);


// alert("2" + "2");

// alert("2 plus 2 equals " + "2" + "2");



// MCQ's

// 01 : What is the output of the following code

// var firstName = "Usama";

// var lastName = "Israr";

// var fullName = firstName + lastName;

// console.log(fullName);

// a. Usama Israr         b. UsamaIsrar *        c. Usama       d. Israr


// 02 : What is the output of the following code

// var firstName = "Usama";

// var lastName = "Israr";

// var fullName = firstName + "" + lastName;

// console.log(fullName);

// a. Usama Israr         b. UsamaIsrar *        c. Usama       d. Israr


// 03 : What is the output of the following code

// var firstName = "Usama";

// var lastName = "Israr";

// var fullName = firstName + " " + lastName;

// console.log(fullName + "!");

// a. Usama Israr! *        b. UsamaIsrar!         c. Usama!       d. Israr!


// 04 : What is the output of the following code

// var firstName = "Usama";

// var lastName = " Israr";

// var fullName = firstName + lastName;

// console.log(fullName);

// a. Usama Israr *        b. UsamaIsrar         c. Usama       d. Israr


// 05 : What is the output of the following code

// var num1 = 2;

// var num2 = "2";

// console.log(num1 + num2);

// a. 2         b. 22              c. 2"2"          d. "22" *


// 06 : What is the output of the following code

// var num1 = 2;

// var num2 = 4;

// console.log(num2 - num1);

// a. 24              b. 42              c. 2 *            d. 4














// Chp 09 : Prompts

// var spec = prompt("Your species?", "human");


// var question = "Your species?";

// var defaultAnswer = "human";

// var spec = prompt(question, defaultAnswer);



// var numberOfCats = prompt("How many cats?");

// var tooManyCats = numberOfCats + 1;

// console.log(tooManyCats);


// var userName = window.prompt("Enter your name", "John Doe");



// MCQ's


// 01 : how can we input from the user

// a. alert    b. console.log()     c. prompt *       d. None of these













// Chp 10 : If Statements 

// var x = prompt("What does the pope live?");

// if(x === "Vatican") {
//     alert("Correct!");
// }


// var correctAnswer = "Vatican";

// if(x === correctAnswer) {
//     alert("Correct!");
// }



// var correctAnswer = "Vatican";

// if(x === correctAnswer) {
//     score++;
//     userId = "genius";
//     alert("Correct!");
// }



// MCQ's


// 01 : What is the output of the following code

// var userName = "Usama";

// if(userName === "Usama") {
//     alert("Correct!");
// }

// a. Usama       b. Correct! *       c. Usama Correct!     d. userName