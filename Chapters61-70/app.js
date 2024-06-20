// Chp 61 : The DOM : Junk artifacts and nodeType


/*
1st level: document
 2nd level:   <html>
 3rd level:     <head>
 4th level:       <title>
 5th level:         Simple document
                 </title>
               </head>
 3rd level      <body>
 4th level        <div>
 5th level          <p>
 6th level            There's not much to this.
                   </p>
 5th level          <p>
 6th level            Nor to this.
                   </p>
                 </div>
               </body>
             </html>
*/


/*
1st level: document
 2nd level:   <html>
 3rd level:     <head>
 4th level:       <title>
 5th level:         Simple document
                 </title>
               </head>
 3rd level      <body>
 4th level        <div>
 5th level          <p>
 6th level            There's not much to this.
                   </p>
 5th level          <p>
 6th level            Nor to this.
                   </p>
                 </div>
               </body>
             </html>
*/


/*
 <html
    ><head
        ><title
            >Simple document
        </title
    ></head
    ><body
    ><div
        ><p
            >There's not much to this.
        </p
        ><p
            >Nor to this.
        </p
    ></div
  ></body
></html>
*/


/*
<html><head><title>Simple document</title></head><body><div><p>There's 
not much to this.</p><p>Nor to this.</p></div></body></html> */


// var nType = targetNode.nodeType;


/*
<div id="humpty">
<p>All the king's horses.</p>
<p>All the dude's crew.</p>
<p>All the town's orthopedists.</p>
</div>
*/


/*
var d = document.getElementById("humpty");

var pCounter = 0;
for (var i = 0; i < d.childNodes.length; i++) {
 
    if (d.childNodes[i].nodeType === 1 ) {
        pCounter++;
    }
    if (pCounter === 2) {
        d.childNodes[i].innerHTML = "All his men.";
        break;
    }
}
*/

// document.getElementById("p2").innerHTML = "All his men.";















// Chp 62 : The DOM : More ways to target elements


// var targetNode = parentNode.childNodes[0];

//  var targetNode = parentNode.firstChild;

//  var targetNode = parentNode.childNodes[2];

//  var targetNode = parentNode.lastChild;


/*
<div id="div1">
  <div id="div2">
    <p>Chicago</p>
    <p>Kansas City</p>
    <p>St. Louis</p>  
  </div>
</div>
*/

/*
var kidNode = document.getElementById("div2");
var pNode = kidNode.parentNode;
*/


/*
var firstEl = document.getElementById("div1");
secondEl = firstEl.nextSibling;
*/


/*
var firstEl = document.getElementById("div1");
var nonexistentEl = firstEl.previousSibling;
*/












// Chp 63 : The DOM : Getting a target's name

/*
var targetNode = document.getElementById('demo');
var nType = targetNode.nodeType;
console.log(nType);
*/


/*
var parent = document.getElementById("div1");
var target = parent.firstChild;
nName = target.nodeName;

console.log(nName);
*/


/*
var parent = document.getElementById("div1");
var target = parent.firstChild;
var nTextContent = target.nodeValue;

console.log(target);
*/


/*
<h2>Do 
<em>not</em> hit!</h2>
*/



// <h2>Do <em>not</em> hit!</h2>


// <h2>Do <em>not</em> hit!</h2>


// if (targetNode.nodeName.toLowerCase === "img") {











// Chp 64 : The DOM : Counting Elements


//  var liElements = getElementsByTagName("li");

//  var howManyLi = liElements.length;


/*
for (var i = 0; i < howManyLi; i++) {
  if (liElements[i].innerHTML === "") {
      
  liElements[i].innerHTML = "coming soon";
  }
}
*/


/*
var parentNode = document.getElementById("div1");
var nodeList = parentNode.childNodes;

console.log(nodeList);
*/


//  var howManyKids = nodeList.length;


/*
var numberPics = 0;
for (var i = 0; i < howManyKids; i++) {
  if (nodelist[i].nodeName.toLowerCase() === "img") {
    numberPics++;
  }
}
*/











// Chp 65 : The DOM : Attributes


//  <a href="http://www.amazon.com">Shop</a>

//  <element something="something in quotes">


/*
<div id="p1">
<p class="special">
<img src="images/slow-loris.png">
<span style="font-size:24px;">
*/


//  <img src="dan.gif" alt="Dan" height="42" width="42">


/*
var target = document.getElementById("p1");
var hasClass = target.hasAttribute("class");
*/

/*
var target = document.getElementById("div1");
var attVal = target.getAttribute("class");
*/


/*
var target = document.getElementById("div1");
target.setAttribute("class, "special");
*/

// <div id="div1" class="special">











// Chp 66 : The DOM : Attribute names and values

//  var list = document.getElementsByTagName("p");

//  var list = document.getElementById("p1").childNodes;

// var list = document.getElementById("p1").attributes;

//  var numOfItems = list.length;

// var numOfItems = document.getItemById("p1").attributes.length;

//  var nName = list[2].nodeName;

// <p id="p1" class="c1" onMouseover="chgColor();">

// var nValue = list[2].nodeValue;











// Chp 67 : The DOM : Adding nodes

// var nodeToAdd = document.createElement("p");

// var imgNodeToAdd = document.createElement("img");

//  nodeToAdd.setAttribute("class", "regular");


//  imgNodeToAdd.setAttribute("border", "1");

//  var newTxt = document.createTextNode("Hello!");

//  nodeToAdd.appendChild(newTxt);












// Chp 68 : The DOM : Inserting nodes


/*
var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);
*/


/*
var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
var paragraph1 = parentDiv.firstChild;
parentDiv.insertBefore(newParagraph, paragraph1);

console.log(parentDiv);
*/

/*
var target = parentDiv.childNodes[1];
parentDiv.insertBefore(newE, target.nextSibling);
*/


/*
var parentDiv = document.getElementById("div1");
var nodeToRemove = parentDiv.childNodes[2];
parentDiv.removeChild(nodeToRemove);
*/












// Chp 69 : Objects

/*
var plan1Name = "Basic";
var plan1Price = 3.99;
var plan1Space = 100;
var plan1Data = 1000;
var plan1Pages = 10;
var plan2Name = "Professional";
var plan2Price = 5.99;
var plan2Space = 500;
var plan2Data = 5000;
var plan2Pages = 50;
var plan3Name = "Ultimate";
var plan3Price = 9.99;
var plan3Space = 2000;
var plan3Data = 20000;
var plan3Pages = 500;
*/


//  alert("The cost of the " + plan2Name + "package is $" + plan2Price + " per month.");

//  alert("The cost of the " + plan2.name + " package is $" + plan2.price + " per month.");

/*
 var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer:
  pages:7
};
*/

// plan1.discountMonths = [6, 7, 11];

//  var mo = plan1.discountMonths[2];













// Chp 70 : Objects : Properties

// deal3.cost = 79.95;

// deal3.name = "Super-saver";

// deal3.features = ["Guarantee", "Free Ship"];

// deal3.market = "regional";

// var deal4 = {};

// deal3.market = undefined;

// delete deal3.market;

// propertyExists = "market" in deal3;