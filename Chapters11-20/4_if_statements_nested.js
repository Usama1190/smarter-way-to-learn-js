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