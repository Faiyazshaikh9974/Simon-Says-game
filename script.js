let level = 0;

games = [];
users = [];

let color = ["palevioletred", "cadetblue", "orange", "cornflowerblue"]

start = false

h2 = document.querySelector("h2")


document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        levelup()
    }
})

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 280)
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 200)
}


function levelup() {
    users = [];
    level++
    h2.innerText = `Level ${level}`
    let random = Math.floor(Math.random() * 4)
    randomIndx = color[random];
    let randBtn = document.querySelector(`.${randomIndx}`)
    games.push(randomIndx)
    console.log(games)
    gameflash(randBtn)
}

function check (inx) {
    if (games[inx]=== users[inx]){
        if (users.length == games.length){
            setTimeout(levelup(), 1000)
        }
    }else {
        h2.innerText = "Game Over Press any Key to Start Again"
        document.querySelector("body").style.backgroundColor= "red"
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor= "white"
        } ,1000)
        reset()
    }
    }

function btnpress() {
    console.log("Button was pressed")
    btn = this
    userflash(btn)
    userinput = btn.getAttribute("id")
    users.push(userinput)
    console.log(userinput)
    check(users.length-1);
}



let allbtns = document.querySelectorAll(".btn")

for (btns of allbtns) {
    btns.addEventListener("click", btnpress)
}

function reset(){
    start = false;
    games = [];
    users = [];
    level = 0;
}