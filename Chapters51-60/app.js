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