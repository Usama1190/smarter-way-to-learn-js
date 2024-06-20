// Chp 51 : Reading and Setting paragraph text


/*
<p id="slowLoris">
 Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.
 <a href="javascript:void(0);" onClick="expandLoris();"
 ><em>Click for more.</em></a>
 </p>
 */


/*
function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species 
    of trepsirrhine primates which make up the genus Nycticebus. They have 
    a round head, narrow snout, large eyes, and a variety of distinctive 
    coloration patterns that are species-dependent. The hands and feet of 
    slow lorises have several adaptations that give them a pincer-like 
    grip and enable them to grasp branches for long periods of time.
    Slow lorises have a toxic bite, a rare trait among mammals.";

    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}
*/


/*
function placeAList() {
    var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li>
    <li>Just-right loris</li></ol>";

    document.getElementById("lorisList").innerHTML = listToPlace;
}
*/


/*
function peekAtContent() {
   var whatsThere = document.getElementById("content").innerHTML;
}
*/














// Chp 52 : Manuplating images and text


// <img src="Blobfish.jpg" id="ugly"... 

// <img src="blobfish.jpg" id="ugly" onClick="makeInvisible();">

// .hidden {display:none;}


/*
function makeInvisible() {
   document.getElementById("ugly").className = "hidden";
}
*/


/*
function makeBig() {
   document.getElementById("p1").className += " big"; 
}
*/













// Chp 53 : Swapping Images


// <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"></img>

// <img src="before-pic.jpg" id="before" onMouseover="swapPic();">


/*
function swapPic() {
   document.getElementById("before").src = "after-pic.jpg";
}
*/



// <img src="before-pic.jpg" id="before" 
// onMouseover="swapPic(id,'after-pic.jpg');">


/*
function swapPic(eId, newPic) {
    document.getElementById(eId).src = newPic
}
*/













// Chp 54 : Swapping images and setting classes


/*
function swapPic() {
   document.getElementById("before").src = "after-pic.jpg";
}
*/


/*
function swapPic() {
    var pic = document.getElementById("before");
    pic.src = "after-pic.jpg";
}
*/


/*
function getAddress() {
   var link = document.getElementById("link1");
   var address = link.href;
}
*/


/*
function enlargeForm() {
   var frm = document.getElementById("link1);
   frm.className = "jumbo";
}
*/













// Chp 55 : Setting Styles


/*
function makeBig() {
   document.getElementById("p1").className += " big";
}
*/


/*
function makeBig() {
   document.getElementById("p1").style.fontSize = "2em";
}
*/

//  document.getElementById("pic99").style.cssFloat = "left";

//  document.getElementById("div9").style.visibility = "hidden";

// document.getElementById("mainPic").style.margin = "0 10px 0 10px;";


// var m = document.getElementById("mainPic").style.margin;

// var m = document.getComputedStyle("mainPic").margin;













// Chp 56 : Target all elements by tag name


// getElementById(the id).style.fontSize = "2em";

// var par = document.getElementsByTagName("p");


/*
<p>This bed is too small.</p>
<p>This bed is too big.</p>
<p>This bed is just right.</p>
*/

// var textInMiddleParagraph = par[1].innerHTML;

//  par[1].innerHTML = "This SUV is too big.";


/*
for (var i = 0; i < par.length; i++) {
   par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
}
*/

// var pics = document.getElementsByTagName("img");

//  var divs = document.getElementsByTagName("div");

//  var ulists = document.getElementsByTagName("ul");












// Chp 57 : Target some elements by tag name

//  var pars = document.getElementsByTagName("p");

//  var textInMiddleParagraph = pars[1].innerHTML;


/*
var e = document.getElementByID("rules");
var paragraphs = e.getElementsByTagName("p");
*/

//  document.getElementsByTagName("p");

//  e.getElementsByTagName("p");


/*
var t = document.getElementById("table9");
var cells = t.getElementsByTagName("td");

for (var i = 0; i < cells.length; i++) {
   cells[i].style.backgroundColor = "pink";
}
*/











// Chp 58 : The DOM