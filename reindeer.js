var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var counter = reindeer.length;
var coloredReindeer = "";

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < counter; i++) {
  coloredReindeer = reindeer[i] + " " +  colors[i];
  console.log("combo " + i + " is " + coloredReindeer);
  hohohoElement.innerHTML  += `<div>This reindeer is ${coloredReindeer}</div>`;
}

// var hohohoElement = document.getElementById("reindeer");

// for (var loopNum = 0; loopNum < counter; loopNum++) {
// 	coloredReindeer = colors[loopNum] +" "+ reindeer[loopNum];

// hohohoElement.innerHTML += `<div>${"hmm... Dat moose iz " + coloredReindeer}</div>`;
// console.log("The reindeer is ", coloredReindeer);








///////////////////// Add Practice ///////////////////////
var colors = ["red","green","blue","black"];
var curry = ["mild","medium","hot","native"];
var numColors = colors.length;
var combos = "";

for (var i = 0; i <numColors; i++) {
  combos = curry[i] + " " + colors[i];
  console.log("the soup combos are ", combos);
  var printSoups = document.getElementById("soupList")
  printSoups.innerHTML += `<div>This soup ${" for u " + combos}</div>`; 
}




var combos1 = "";
var combos2 = "";
var combos3 = "";
var combos4 = "";
var combos5 = "";


for (var i = 0; i <numColors; i++) {
  combos1 = curry[0] + " " + colors[i];
  // console.log("the soup combos are ", combos1);
  var printSoups1 = document.getElementById("soupList")
  printSoups1.innerHTML += `----<div>This soup ${" for u " + combos1}</div>`;

  combos2 = curry[1] + " " + colors[i];
  // console.log("the soup combos are ", combos2);
  var printSoups2 = document.getElementById("soupList")
  printSoups2.innerHTML += `<div>This soup ${" for u " + combos2}</div>`;

  combos3 = curry[2] + " " + colors[i];
  // console.log("the soup combos are ", combos3);
  var printSoups3 = document.getElementById("soupList")
  printSoups3.innerHTML += `<div>This soup ${" for u " + combos3}</div>`;

  combos4 = curry[3] + " " + colors[i];
  // console.log("the soup combos are ", combos4);
  var printSoups4 = document.getElementById("soupList")
  printSoups4.innerHTML += `<div>This soup ${" for u " + combos4}</div>`;
}























// }

// // Extra Practice

// var colors = ["red","green","blue","black"];
// var curry = ["mild","medium","hot","native"];
// var numColors = colors.length;
// var combos = "";

// var printToDoc = document.getElementById("soupList");

// for (var soupNum = 0; soupNum < numColors; soupNum++) {
// 	combos = colors[soupNum] +" "+ curry[soupNum];
// 	console.log("the soup combos are ", combos);

// printToDoc.innerHTML += `<div>${"Well, we have a " + combos}</div>`;

// // OR Don't assign "document.getElementById("soupList");" and just write it out:
// document.getElementById("soupList").innerHTML += `<div>${"---> ALT OUTPUT with no var set for doc...getElem... " + combos}</div>`; 

// }


// printToDoc.innerHTML += `<div><H3>${"     This runs all 4 times but only returns FINAL as it is OUTSIDE the function and returns final value of 'combos' which is: <h2>" + combos + "!!!</h2>"}</h3></div>`;


