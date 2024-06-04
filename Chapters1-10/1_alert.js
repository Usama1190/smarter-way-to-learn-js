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
