const letterAPic = document.querySelector("#letterAPic");
const aButton = document.querySelector("#aButton");
const aHideB = document.querySelector("#aHideB");

aButton.addEventListener("click", (e) => {
  console.log("button A clicked");
  // accessing CSS properties in JS: https://www.w3schools.com/js/js_htmldom_css.asp
  letterAPic.style.display = "block";
});

aHideB.addEventListener("click", (e) => {
  letterAPic.style.display = "none";
});

const letterBPic = document.querySelector("#letterBPic");
const bButton = document.querySelector("#bButton");
const bHideB = document.querySelector("#bHideB");

bButton.addEventListener("click", (e) => {
  console.log("button B clicked");
  letterBPic.style.display = "block";
});

bHideB.addEventListener("click", (e) => {
  letterBPic.style.display = "none";
});

const letterCPic = document.querySelector("#letterCPic");
const cButton = document.querySelector("#cButton");
const cHideB = document.querySelector("#cHideB");

cButton.addEventListener("click", (e) => {
  console.log("button C clicked");
  letterCPic.style.display = "block";
});

cHideB.addEventListener("click", (e) => {
  letterCPic.style.display = "none";
});
