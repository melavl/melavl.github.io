// Bsp: Alice ist 24 Jahre alt.
// Grace ist 74 Jahre alt.
// Grace ist 50 Jahre älter.

// let ageAda = 24;
// let ageGrace = 74;

// let difference = ageGrace - ageAda;

// console.log("Grace ist " + difference + " Jahre älter");

// let studies = [];

// studies = ["Ada", "Grace", "Charles"];

// console.log(studies[2]);

// Bsp.: Ada studiert Medienprogrammierung.

// let score = 0;
//
// const goal = function () {
//   score = score + 1;
//   console.log(score);
// }
//
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();
// goal();


// let score = 0;
//
// const goal = function (points) {
//   score = score + points;
//   console.log(score);
// }
//
// goal(2);
// goal(1);
// goal(-8);
// goal(3);


// let score = 0;
// let scorezwei = 0;
//
// const goal = function (points1, points2) {
//   score = score + points1;
//   scorezwei = scorezwei + points2;
//   console.log("Der Spielstand ist " + score, ": " + scorezwei);
// }
//
// goal(1, 0);
// goal(0, 1);
// goal(0, 1);


let score = 0;
const buttonTag = document.querySelector("div.button");
const scoreTag = document.querySelector("div.score");


buttonTag.addEventListener("click", function (){
score = score + 1;

console.log(score);
scoreTag.innerHTML = score;
scoreTag.style.color = "yellow";
scoreTag.style.fontSize = score + "50px";
});


const darkmodeTag = document.querySelector("div.darkmode");
const bodyTag = document.querySelector("body");

darkmodeTag.addEventListener("click", function (){
bodyTag.style.backgroundColor = "black";
darkmodeTag.style.backgroundColor = "white";
});

const whitemodeTag = document.querySelector("div.whitemode");


whitemodeTag.addEventListener("click", function (){
bodyTag.style.backgroundColor = "white";
whitemodeTag.style.backgroundColor = "white";
});
