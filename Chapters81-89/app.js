// Chp 81 : Browser control : Testing for popup blockers

/*
function checkForPopBlocker() {
    var testPop = window.open("", "","width=100,height=100"); 
    if (testPop === null) {   
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}

checkForPopBlocker();
*/

/*
function checkForPopBlocker() {
    var testPop = window.open("", "","width=100,height=100"); 
    if (testPop === null || typeof(testPop === "undefined") {
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}
*/

//  <body onLoad ="checkForPopBlocker();">

// window.open().document.write("Hello, Usama!");














// Chp 82 : Form valdation : Text fields


/*
<form onSubmit="return checkForLastName();"> 
    Please enter your last name.<br>
    <input type="text" id="lastNameField">
    <input type="submit" value="Submit Form">
</form>
*/


/*
function checkForLastName() {
    if (document.getElementById("lastNameField").value.length === 0) {
        alert("Please enter your last name");
        return false;
    }
}
*/

// <form onSubmit="return checkForLastName();">


/*
function checkForLastName() {
    if (document.getElementById("lastNameField").value.length === 0) {
        alert("Please enter your last name");
        document.getElementById("lastNameField").focus();
        return false;     
    }
}
*/


/*
function checkForLastName() {
    var targetField = document.getElementById("lastNameField");
    if (targetField.value.length === 0) {
        alert("Please enter your last name");
        targetField.focus();
        return false;
    }
}

*/


/*
function checkForLastName() {   
    var targetField = document.getElementById("lastNameField");
    
    if (targetField.value.length === 0) {
        alert("Please enter your last name");
        targetField.focus();
        targetField.style.background = "yellow";
        return false; 
    }
    targetField.style.background = "white";
}
*/












// Chp 83 : Form validation : drop-downs


/*
<form onSubmit="return checkForSelection();"> 
  <select id="states">
    <option value="" selected="selected">
      SELECT A STATE</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
    </select>&nbsp;&nbsp;
  <input type="submit" value="Submit Form">
</form>
*/


/*
function checkForSelection() {
    if (document.getElementById("states").selectedIndex === 0) {
        alert("Please select a state.");
        return false;
    }
*/


/*
function checkForSelection(selecID) {
    var target = document.getElementById(selecID);
        if (target.selectedIndex === 0) {
        alert("Please select a state.");
        return false;
    }
}
*/

// <form onSubmit="return checkForSelection('states');">











// Chp 84 : Form Validation : radio buttons


/*
<form onSubmit="return validateRadios();">
    <input type="radio" name="r1" value="cat"> Cat<br>
    <input type="radio" name="r1"value="hat"> Hat<br>
    <input type="radio" name="r1" value="bat"> Bat<br>
    
    <input type="submit" value="Submit Form">
</form>
*/

/*
function validateRadios() {    
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true; 
        }
    }
    alert("Please check one.");
    return false;
}
*/

/*
function validateRadios(ename) {    
    var radios = document.getElementsByName(eName);
}
*/














// Chp 85 : Form validation : ZIP codes


/*
function validateZIP() {
    var numChars = document.getElementById("zip").value.length;
        if (numChars < 5) {
        alert("Please enter a 5-digit code.");     
    }
}
*/


/*
function validateZIP() {   
    var valueEntered = document.getElementById("zip").value;      
    var numChars = valueEntered.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }
    for (var i = 0; i <= 4; i++) {
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
            return false;
        }
    }
}
*/













// Chp 86 : Form validation : email


/*
function validateEmail() {
    var eEntered = document.getElementById("email").value;
    if (eEntered.indexOf(" ") !== -1) {   
        alert("No spaces allowed in address");    
    }
}
*/



/*
function validateEmail() {    
    var addressIsLegal = true;
    var eEntered = document.getElementById("address").value;
    if (eEntered.indexOf(" ") !== -1) {
        addressIsLegal = false;
    }

    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
        addressIsLegal = false;
    }

    if (addressIsLegal === false) {
        alert("Please correct email address");
        return false; 
    }
}

*/


/*
function validateEmail() {
    var addressIsLegal = true;   
    var eEntered = document.getElementById("address").value;
    if (eEntered.indexOf(" ") !== -1) {
        addressIsLegal = false;
    }

    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {>
        addressIsLegal = false;
    }

    if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
        eEntered.indexOf(".") > eEntered.length - 3) {   
        addressIsLegal = false;
    }

    if (addressIsLegal === false) {    
        alert("Please correct email address");   
        return false; 
    }
}
*/


/*
function validateEmail() {
    var eEntered = document.getElementById("address").value;
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if (!(eEntered.match(emailCorrectPattern))) {  
        alert("Please correct email address");  
    }
}
*/














// Chp 87 : Exceptions : Try and catch


/*
function greetWorld() {
    var greeting = "Hello world!";
    aler(greeting);
}

greetWorld();
*/

/*
function greetWorld() {
    try {     
        var greeting = "Hello world!";     
        aler(greeting);
    }
    catch(err) {     
        alert(err);
    }
}

greetWorld();
*/













// Chp 88 : Exception : throw


/*
<form onSubmit="return checkPassword();">
    Enter a password<br>
    (8-12 characters, at least 1 number, no spaces)<br>
    <input type="text" id="f1">
    <input type="submit" value="Submit">
</form>
*/


/*
function checkPassword() {
    try {
        var pass = document.getElementById("f1").value;
        if (pass.length < 8) {
            throw "Please enter at least 8 characters.";
        }
        if (pass.indexOf(" ") !== -1) {
            throw "No spaces in the password, please.";
        }
        var numberSomewhere = false;
        for (var i = 0; i < pass.length; i++) {
            if (isNaN(pass(i, i+1)) === false) {
                numberSomewhere = true;
                break;
            }
        }
        if (numberSomewhere === false) {
            throw "Include at least 1 number.";
        }   
    }
    catch(err) {
    alert(err);
    }   
}
*/

/*
function user() {
    throw "Please Not reload the page!!!";
}

user();
*/















// Chp 89 : Handling events within JavaScript


// <input type="button" value="Click" onClick="sayHello();">

// <input type="button" value="Click" id="button1">

/*
var b1 = document.getElementById("button1");
b1.onclick = sayHello;
*/


// document.getElementById("button1").onclick = sayHello;

/*
function sayHello() {
    alert("Hi there.");
}
*/

/*
var targetImg = document.getElementById("i12");
targetImg.onmouseover = swapPic;
*/

/*
var emailFrm = document.getElementById("form5");
emailFrm.onsubmit = valEmail;
*/