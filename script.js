// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var minus50Btn = document.getElementById("minus50");
var displayEl = document.getElementById("display");
var minus10Btn = document.getElementById("minus10");
var minus1Btn = document.getElementById("minus1");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
let plus50Btn = document.getElementById("plus50");
var Btn3 = document.getElementById("rand3");
var stringInEl = document.getElementById("strIn");
var random1 = document.getElementById("rand1");
var random2 = document.getElementById("rand2");
var random3 = document.getElementById("rand3");
var random4 = document.getElementById("rand4");
var rsize = document.getElementById("random-size");
var rcolor = document.getElementById("random-rgb");
var resetdata = document.getElementById("reset");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

// Event Listener
minus50Btn.addEventListener("click", minus50fnc);
minus10Btn.addEventListener("click", minus10fnc);
minus1Btn.addEventListener("click", minus1fnc);
plus1Btn.addEventListener("click", plus1fnc);
plus10Btn.addEventListener("click", plus10fnc);
plus50Btn.addEventListener("click", plus50fnc);
random1.addEventListener("click", randomgen1);
random2.addEventListener("click", randomgen2);
random3.addEventListener("click", randomgen3);
random4.addEventListener("click", randomgen4);
rsize.addEventListener("click", ransize);
picBtn.addEventListener("click", addCandy);
rcolor.addEventListener("click", rancolor);
resetdata.addEventListener("click", reset);
stringInEl.addEventListener("change", placetext);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event Functions
function minus50fnc() {
  // Update the value of the counter  (JS)
  counter = counter - 50;
  console.log(counter);
  // Use the counter to update the website
  displayEl.innerHTML = counter;
}

function minus10fnc() {
  // Update Counter
  counter -= 10; // same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}

function minus1fnc() {
  // Update Counter
  // counter = counter - 1;
  // counter -= 1;

  counter--;

  // Update Site
  displayEl.innerHTML = counter;
}

function plus1fnc() {
  counter++;

  displayEl.innerHTML = counter;
}

function plus10fnc() {
  counter += 10;

  displayEl.innerHTML = counter;
}

function plus50fnc() {
  counter += 50;

  displayEl.innerHTML = counter;
}

function randomgen1() {
  var rand = Math.random() * (1 - 0) + 0;
  document.getElementById("rand1-out").innerHTML = rand;
  console.log(rand);
}

function randomgen2() {
  var rand = Math.floor(Math.random() * (100 - 1)) + 1;
  document.getElementById("rand2-out").innerHTML = rand;
  console.log(rand);
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
function randomgen3() {
  var rand = Math.floor(Math.random() * (5 - -5)) + -5;
  rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

// Random # from x to y;
function randomgen4() {
  let input1 = Number(document.getElementById("rand-in1").value);
  let input2 = Number(document.getElementById("rand-in2").value);
  var rand = Math.floor(Math.random() * (input1 - input2)) + input2;
  document.getElementById("rand4-out").innerHTML = rand;
  console.log(rand);
}

function ransize() {
  let value1 = Math.random() * (400 - 1) + 1;
  document.getElementById("candyImg").style.width = `${value1}px`;
  console.log(value1);
}

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // Every click, add another candy to the container

  picContainer.innerHTML += "<img width = '50px' src= 'img/s-l400.jpg'/>";
}

function rancolor() {
  let value1 = Math.random() * (255 - 1) + 1;
  let value2 = Math.random() * (255 - 1) + 1;
  let value3 = Math.random() * (255 - 1) + 1;
  document.getElementById(
    "random-rgb"
  ).style.color = `rgb(${value1}, ${value2}, ${value3})`;
  console.log(value1);
  console.log(value2);
  console.log(value3);
}

function reset() {
  displayEl.innerHTML = "0";
  stringInEl.value = " ";
  document.getElementById("str0ut").innerHTML = "Once upon a time,";
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.getElementById("rand-in1").value = " ";
  document.getElementById("rand-in2").value = " ";
  rcolor.style.color = "black";
  document.getElementById("pic-container").innerHTML +=
    "<img src= 'img/s-1400.jpg'>";
}

function placetext() {
  let usertext = document.getElementById("strIn").value;
  document.getElementById("strOut").innerHTML = `${usertext}`;
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 5. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
// Not allowed to use window.location.reload (which refreshes the page)

// 6. Create a button that when pressed, adds an image of your favourite toy to the website.
// Each click adds another toy.
// document.getElementById("pic-btn").style.fontSize = "32px";
