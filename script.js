


/*
let i = 0;
let txt = "prout";
let speed = 500;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt[i];
    i++;
  }
  else if(i == txt.length){
    document.getElementById("demo").textContent = "";
    i=0
  }
 
}
setInterval(typeWriter, speed);

//window.addEventListener("load",typeWriter);
*/
//ex 2
/*
const timer = document.getElementById("ex2");

let seconds = 0;
function chronometre(){
    
  if (seconds > 60) {
    let minutes = Math.floor(seconds / 60);
    timer.innerText = minutes  == 1 ? minutes + " minute has passed" : minutes + " minutes have passed";
  }
  else {
    timer.innerText = seconds == 1 ?  seconds + " second has passed" :seconds + " seconds have passed";
  }
  seconds += 1;
  setTimeout(chronometre, 100);

}
chronometre();

*/

//frappe la taupe
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;

let score = 0;
//temps apparition taupe
function randomTime(min, max) {
return Math.round(Math.random() * (max - min) + min*2.5);
}

//choix apparition taupe 
function randomHole(holes) {
const idx = Math.floor(Math.random() * holes.length);
const hole = holes[idx];
if (hole === lastHole) {
return randomHole(holes);
}
lastHole = hole;
return hole;
}


function peep() {
const time = randomTime(1000, 1500);
const hole = randomHole(holes);
hole.classList.add('up');
setTimeout(() => {
hole.classList.remove('up');
if (!timeUp) peep();
}, time);
}


function startGame() {
scoreBoard.textContent = 0;
timeUp = false;
score = 0;
peep();
setTimeout(() => timeUp = true, 60000)
}


function whack(e) {
if(!e.isTrusted) return;
score++;
this.parentNode.classList.remove('up');
scoreBoard.textContent = score;
}


moles.forEach(mole => mole.addEventListener('click', whack));





