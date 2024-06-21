// Chp 71 : Objects : Methods

/*
var plan1 = {
   name: "Basic",
   price: 3.99,
   space: 100,
   transfer: 1000,
   pages: 10,
   discountMonths: [6, 7]
};
*/


/*
function calcAnnual() {  
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
        if (plan1.discountMonths[i] === thisMo) {
            bestPrice = plan1.price * .8;
            break;
        }
    }
    return bestPrice * 12;
}
*/

// var annualPrice = calcAnnual();


/*
function calcAnnual(percentIfDisc){  
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
        if (plan1.discountMonths[i] === thisMo) {
            bestPrice = plan1.price * percentIfDisc;
        }
        break;
    }
    return bestPrice * 12;
}
*/

//  var annual Price = calcAnnual(.85);



/*
var plan1 = {
    name: "Basic", 
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7],

    calcAnnual: function(percentIfDisc) {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] === thisMo) {
                bestPrice = plan1.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};
*/

// var annualPrice = plan1.calcAnnual(.85);


/*
var plan1 = {    
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,

    pages: 10,
    discountMonths: [6, 7],

    calcAnnual: function(percentIfDisc) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};
*/













// Chp 72 : Objects : Constructors

/*
var plan1 = {
   name:   "Basic",
   price: 3.99,
   space: 100,
   transfer: 1000,
   pages: 10
};
*/


/*
function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}
*/

//  var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);


/*
var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);
*/


/*
function Plan(name, price, space, transfer, pages) {
    this.doc = name;
    this.grumpy = price;
    this.sleepy = space;
    this.bashful = transfer;
    this.sneezy = pages;
}
*/













// Chp 73 : Objects : Constructor for methods


/*
function Plan(name, price, space, transfer, pages, discountMonths) {     
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;

    this.calcAnnual = function(percentIfDisc) {
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();

        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    };
} 
*/

/*
var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);
*/

// var annualPrice = p2.calAnnual(.85);


// calcAnnual: function(percentIfDisc) {

// this.calcAnnual = function(percentIfDisc) {

/*
let person = {
    name: 'usama',
    age : 22,
    gender: 'male',

    dob: function() {
        console.log("Your dob is ...");
        return 5;
    }
}

console.log(person.dob());
*/

/*
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.dob = function() {
        console.log("Your dob is ...");
    };
}

let myConst = new Person("usama", 22, "male");
console.log(myConst.dob());
*/














// Chp 74 : Objects : Prototypes


/*
Plan.prototype.calcAnnual = function(percentIfDisc) {  
    var bestPrice = this.price;     
    var currDate = new Date();
    var thisMo = currDate.getMonth();

    for (var i = 0; i < this.discountMonths.length; i++) {
        if (this.discountMonths[i] === thisMo) {
            bestPrice = this.price * percentIfDisc;
            break;
        }
    }
    return bestPrice * 12;
};
*/

// Plan.prototype.cancellable = true;

//  plan1.cancellable = false;












// Chp 75 : Objects : Checking for properties and methods


// var gotTheProperty = "price" in plan1;

// var gotTheProperty = "location" in plan1;

// var gotTheProperty = "calcAnnual" in plan1;

/*
var listOfProperties = [];
for (var prop in plan1) {
   listOfProperties.push(prop);
}
*/


/*
var listOfProperties = [];
for (var prop in plan1) {
    if (plan1.hasOwnProperty(prop)) {
        listOfProperties.push(prop);
    }
}
*/

// var isOwnedProperty = plan1.hasOwnProperty("price");














// Chp 76 : Browser control : Getting and setting the URL

//  var whereWeAt = window.location.href;

// var theDomain = window.location.hostname;

//  var thePath = window.location.pathname;

// var theAnchor = window.location.hash;

//  window.location.href = "http://www.me.com/1.html";

// window.location.href = "http://www.me.com";


/*
var currentSite = window.location.hostname;
var destination = "http://" + currentSite + "/wow.html";
window.location.href = destination;
*/

/* 
var currentSite = window.location.hostname;
var currentPath = window.location.pathname;
var destination = "http://" + currentSite + currentPath + "#humidifier"; 
window.location.href = destination;
*/














// Chp 77 : Browser control : Getting and setting the URL another way

//  window.location.assign("http://www.me.com");

// window.location.assign("http://www.me.com/lojack.html#guarantee");

//  window.location.replace("http://www.me.com/lojack.html#guarantee");

/*
window.location.reload(true);
window.location.reload(false);
window.location.reload();
*/












// Chp 78 : Browser control : Forward and reverse