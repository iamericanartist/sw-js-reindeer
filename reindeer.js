var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var counter = reindeer.length;
var coloredReindeer = "";

var hohohoElement = document.getElementById("reindeer");

for (var loopNum = 0; loopNum < counter; loopNum++) {
	coloredReindeer = colors[loopNum] +" "+ reindeer[loopNum];

hohohoElement.innerHTML += `<div>${"hmm... Dat moose iz " + coloredReindeer}</div>`;
console.log("The reindeer is ", coloredReindeer);




}

// Extra Practice

var colors = ["red","green","blue","black"];
var curry = ["mild","medium","hot","native"];
var numColors = colors.length;
var combos = "";

var printToDoc = document.getElementById("soupList");

for (var soupNum = 0; soupNum < numColors; soupNum++) {
	combos = colors[soupNum] +" "+ curry[soupNum];
	console.log("the soup combos are ", combos);

printToDoc.innerHTML += `<div>${"Well, we have a " + combos}</div>`;

// OR Don't assign "document.getElementById("soupList");" and just write it out:
document.getElementById("soupList").innerHTML += `<div>${"---> ALT OUTPUT with no var set for doc...getElem... " + combos}</div>`; 

}


printToDoc.innerHTML += `<div><H3>${"     This runs all 4 times but only returns FINAL as it is OUTSIDE the function and returns final value of 'combos' which is: <h2>" + combos + "!!!</h2>"}</h3></div>`;


