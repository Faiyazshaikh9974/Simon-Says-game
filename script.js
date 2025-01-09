// Initialize the game level to 0
let level = 0;

// Arrays to store the game sequence and user input
games = [];
users = [];

// Array of colors for the game buttons
let color = ["palevioletred", "cadetblue", "orange", "cornflowerblue"];

// Variable to track if the game has started
start = false;

// Select the h2 element to display the level
h2 = document.querySelector("h2");

// Add an event listener for keypress to start the game
document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        levelup();
    }
});

// Function to flash the game button
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 280);
}

// Function to flash the user button
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

// Function to level up the game
function levelup() {
    users = [];
    level++;
    h2.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 4);
    randomIndx = color[random];
    let randBtn = document.querySelector(`.${randomIndx}`);
    games.push(randomIndx);
    console.log(games);
    gameflash(randBtn);
}

// Function to check the user's input against the game sequence
function check(inx) {
    if (games[inx] === users[inx]) {
        if (users.length == games.length) {
            setTimeout(levelup(), 1000);
        }
    } else {
        h2.innerText = "Game Over. Press any key to start again.";
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 1000);
        reset();
    }
}

// Function to handle button press by the user
function btnpress() {
    console.log("Button was pressed");
    btn = this;
    userflash(btn);
    userinput = btn.getAttribute("id");
    users.push(userinput);
    console.log(userinput);
    check(users.length - 1);
}

// Add event listeners to all game buttons
let allbtns = document.querySelectorAll(".btn");
for (btns of allbtns) {
    btns.addEventListener("click", btnpress);
}

// Function to reset the game
function reset() {
    start = false;
    games = [];
    users = [];
    level = 0;
}
