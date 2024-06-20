// Chp 41 : while loops

/*
for (var i = 0; i <= 3; i++) {
    alert(i);
}


var i = 0;
while (i <= 3) {
    alert(i);
    i++;
}
*/












// Chp 42 : do... while loop

/*
var i = 0;
while (i <= 3) {
    alert(i);
    i++;
}
*/


/*
var i = 0;
do {
    alert(i);
    i++;
} while (i <= 3);
*/


/*
var i = 0;
while (i < 0) {
    alert(i);
    i++;
}
*/

/*
var i = 0;
do {
    alert(i);
    i++;
} while (i < 0);
*/














// Chp 43 : Placing scripts

/*
<script>
function sayHi() {
    alert("Hello world!");
}

function sayBye() {
    alert("Buh-bye!");
}
</script>
*/

/*
function sayHi() {
    alert("Hello world!");
}

function sayBye() {
    alert("Buh-bye!");
}
*/

/* <script src="whatever.js"></script> */














// Chp 44 : Commenting


// This is a comment, ignored by the browser
/*
for (var i = 0; i
if (animals[i] === "bat") {
animals[i] = "cat";
}
}
*/


// var animals = []; // Declare an empty array


// Each comment line must begin with a pair
// of slashes, like this. (Most code editors,
// by the way, are smart enough to recognize
// comments and render them in a different
// color so they're easy for you to
// distinguish from code.)



/*
When a comment requires more than one line,
a block comment like this, with its opening
and closing tags, is the way to go.
*/












// Chp 45 : Events : Link


{/* <a href="#" onClick="alert('Hi');">Click</a> */}


{/* <a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a> */}


{/* <a href="JavaScript:void(0)" onClick="var greet="hi'; alert(greet);">Click</a> */}

/*
function popup(message) {
    alert(message);
}
*/ 

{/* <a href="JavaScript:void(0)" onClick="popup('Hi');">Click</a> */}













// Chp 46 : Events : button


{/* <input type="button" value="Click" onClick="alert('Hello world!');"></input> */}


// onClick="alert('Hello world!');"

// : <input type="button" value="Click"


{/* <a href="summary-page.html"><img src="button-sum-pg.png"></a> */}


{/* <img src="button-greet.png" onClick="alert('Hello world!');"></img> */}


{/* <img src="button-greet.png" onClick="greetTheUser();"></img> */}














// Chp 47 : Events : mouse


{/* <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"></img> */}


{/* <img src="before-pic.jpg" */}

// onMouseover

// "src='after-pic.jpg'">



{/* <h1 onMouseover="alert('Be sure to get your shopping done today.');">World Ends Tomorrow</h1> */}


{/* <a href="index.html" onMouseover="this.style.color='green';">Home Page</a> */}


{/* <p id="loris" onMouseover="expand();">Slow Loris: Mouse over for more info</p> */}


/*
<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"
onMouseout="src='before-pic.jpg'"></img>*/













// Chp 48 : Events : fields


/*
Email:<br>
<input type="text" size="30" onFocus="this.style.backgroundColor='yellow';">
</input>
*/


/*
Email:<br>
<input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"
onBlur="this.style.backgroundColor='white';"></input>
*/


/*
Email:<br>
<input type="text" size="30" onFocus="makeFieldYellow();" 
onBlur="makeFieldWhite();"></input>
*/













// Chp 49 : Reading field values 


/*
<form>
Email:
<input type="text">
<input type="submit" value="Submit">
</form>
*/



/*
<form>
Email:
<input type="text" id="email">
<input type="submit" value="Submit">
</form>
*/


/*
<form onSubmit="checkAddress('email');">
Email:
<input type="text" id="email">
<input type="submit" value="Submit">
</form>
*/


/*
function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
}
*/


/*
function checkAddress(fieldId) {
    var val = document.getElementById(fieldId).value;
    if (val === "") {
        alert("Email address required.");
    }
}
*/











// Chp 50 : Setting field values


/*
<form>
ZIP:<br>
<input type="text" id="zip" onBlur="fillCity();"><br>
City:<br>
<input type="text" id="city">
</form>
*/


/*
function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;

    switch (zipEntered) {
    case "60608" :
        cityName = "Chicago";
        break;
    case "68114" :
        cityName = "Omaha";
        break;
    case "53212" :
        cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}
*/