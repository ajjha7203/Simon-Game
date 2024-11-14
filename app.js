// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");
// let box4 = document.querySelector(".box4");
// let h5 = document.querySelector("h5");
// let h2 = document.querySelector("h2");

// box1.addEventListener("click", function(){
//     console.log("Box1 clicked!")
// });
// box2.addEventListener("click", function(){
//     console.log("Box2 clicked!")
// });
// box3.addEventListener("click", function(){
//     console.log("Box3 clicked!")
// });
// box4.addEventListener("click", function(){
//     console.log("Box4 clicked!")
// });

// box1.addEventListener("click", click);
// box2.addEventListener("click", click);
// box3.addEventListener("click", click);
// box4.addEventListener("click", click);
// h2.addEventListener("click", click);
// h5.addEventListener("click", click);

// function click(){
//     console.log(`${this.innerText} clicked`);
// }


// ---------------------------
let h2 = document.querySelector("h2");
let h5 = document.querySelector("h5");
let h4 = document.createElement("h4");
let body = document.querySelector("body");
let highestScore = 0;
h4.innerText = `Your highest Score is ${highestScore}`;
h2.insertAdjacentElement("afterend", h4);

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h5.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h5.innerHTML = `Game Over! Your score was  <b> &nbsp ${level} </b>. Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        highestScore = Math.max(highestScore, level);
        h4.innerText = `Your highest Score is ${highestScore}`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}