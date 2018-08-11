//variables

const board = document.getElementById("board");
const startButton = document.getElementsByClassName("button");
const start = document.getElementById("start");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const boxes = document.getElementsByClassName("boxes");
const box = document.getElementsByClassName("box");
const newgame = document.getElementById("new");
const finish = document.getElementById("finish");
const chosenBoxTracker = [];
let player1ChosenBox = [];
let player2ChosenBox = [];
let counter = 0;
let chosenBox;
const boxli = document.getElementsByTagName("li");
const players = document.getElementsByClassName("players")
//hide board at start of game
board.style.display = "none";
finish.style.display = "none";

//===============================================
//                  LISTENERS
//===============================================

//listener on button to remove start screen and reveal gameboard
startButton[0].addEventListener("click", (event) => {
    start.style.display = "none";
    board.style.display = "block";
    player1.classList.add("class", "active");
});
for (let m = 2; m < boxli.length; m++) {
    boxli[m].addEventListener("mouseenter", enterListener);
}

function enterListener(currentTarget) {
    let hoverbox = event.currentTarget;
    if (player1.classList.contains("active")) {
        hoverbox.style.backgroundImage = "url(./img/o.svg)";
        hoverbox.style.backgroundImage.display = "block";
    } else if (player2.classList.contains("active")) {
        hoverbox.style.backgroundImage = "url(./img/x.svg)";
        hoverbox.style.backgroundImage.display = "block";
    }
}
//listener to replay
newgame.addEventListener("click", (event) => {
    reset();
})
//add individual event listener so that individual ones can be removed
for (let n = 2; n < boxli.length; n++) {
    boxli[n].addEventListener("mouseleave", leaveListener);
}

function leaveListener(currentTarget) {
    let hoverbox = event.currentTarget;
    if (player1.classList.contains("active")) {
        if (!hoverbox.classList.contains("box-filled-1") || !hoverbox.classList.contains("box-filled-2")) {
            hoverbox.style.backgroundImage.display = "none";
            hoverbox.style.backgroundImage = "";
        }
    } else if (player2.classList.contains("active")) {
        if (!hoverbox.classList.contains("box-filled-1") || !hoverbox.classList.contains("box-filled-2")) {
            console.log(!hoverbox.classList.contains("box-filled-1"));
            console.log(!hoverbox.classList.contains("box-filled-2"));
            hoverbox.style.backgroundImage.display = "none";
            hoverbox.style.backgroundImage = "";
        }
    }
}
let tracknoughtsandcrosses = true;
//listener on boxes for gameplay (on the ul)
for (let k = 2; k < boxli.length; k++) {
    boxli[k].addEventListener("click", (event) => {
        if (tracknoughtsandcrosses === true) {
            tracknoughtsandcrosses = noughts(event);
        } else if (tracknoughtsandcrosses === false) {
            tracknoughtsandcrosses = crosses(event);
        }
        if (counter >= 5) {
            checkWinDraw();
        }
    })
}
//helper for boxes listener
const noughts = (event) => {
    chosenBox = event.target;
    player1.classList.add("active");
    if (chosenBox.classList.contains("box-filled-2") || chosenBox.classList.contains("box-filled-1")) {
        return true;
    } else {
        chosenBox.classList.add("box-filled-1")
        chosenBox.removeEventListener("mouseenter", enterListener);
        chosenBox.removeEventListener("mouseleave", leaveListener);
        boxnum = chosenBox.getAttribute("id");
        if (chosenBox.classList.contains("box-filled-2") === false) {
            if (player1ChosenBox.indexOf(boxnum) === -1) {
                player1ChosenBox.push(boxnum);
                counter = counter + 1;
            }
        }
        player1.classList.remove("active");
        player2.classList.add("active");
        return false;
    }
}

const crosses = (event) => {
    chosenBox = event.target;
    player2.classList.add("active");
    if (chosenBox.classList.contains("box-filled-2") || chosenBox.classList.contains("box-filled-1")) {
        return false;
    } else {
        chosenBox.classList.add("box-filled-2")
        chosenBox.removeEventListener("mouseenter", enterListener);
        chosenBox.removeEventListener("mouseleave", leaveListener);
        boxnum = chosenBox.getAttribute("id");
        if (chosenBox.classList.contains("box-filled-1") === false) {
            if (player2ChosenBox.indexOf(boxnum) === -1) {
                player2ChosenBox.push(boxnum);
                counter = counter + 1;
            }
        }
        player2.classList.remove("active");
        player1.classList.add("active");
        return true;
    }
}

// funtion to check for win or draw
const checkWinDraw = () => {
    // check for win
    //player 1 win
    if (player1ChosenBox.includes("box1") && player1ChosenBox.includes("box2") && player1ChosenBox.includes("box3")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.includes("box1") && player1ChosenBox.includes("box4") && player1ChosenBox.includes("box7")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.includes("box1") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box9")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.includes("box4") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box6")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.includes("box2") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box8")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.includes("box3") && player1ChosenBox.includes("box6") && player1ChosenBox.includes("box9")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.includes("box7") && player1ChosenBox.includes("box8") && player1ChosenBox.includes("box9")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.includes("box7") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box3")) {
        tracknoughtsandcrosses = true;
        playerWin(tracknoughtsandcrosses);
    } //        player 2 win            ==========================
    else if (player2ChosenBox.includes("box1") && player2ChosenBox.includes("box2") && player2ChosenBox.includes("box3")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player2ChosenBox.includes("box1") && player2ChosenBox.includes("box4") && player2ChosenBox.includes("box7")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player2ChosenBox.includes("box1") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box9")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player2ChosenBox.includes("box4") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box6")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player2ChosenBox.includes("box2") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box8")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player2ChosenBox.includes("box3") && player2ChosenBox.includes("box6") && player2ChosenBox.includes("box9")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player2ChosenBox.includes("box7") && player2ChosenBox.includes("box8") && player2ChosenBox.includes("box9")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player2ChosenBox.includes("box7") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box3")) {
        tracknoughtsandcrosses = false;
        playerWin(tracknoughtsandcrosses);
    } else if (player1ChosenBox.length + player2ChosenBox.length === 9) {
        tracknoughtsandcrosses = null;
        playerWin(tracknoughtsandcrosses);
    } else {
        console.log("keep playing");
    }
}
//player 1 win screen
const playerWin = (tracknoughtsandcrosses) => {
    board.style.display = "none";
    finish.style.display = "block";
    finish.classList.add("screen");
    finish.classList.add("screen-win");
    let message = document.getElementById("message");
    if (tracknoughtsandcrosses === true) {
        finish.classList.add("screen-win-one");
        message.textContent = "Player 1 wins!";
    } else if (tracknoughtsandcrosses === false) {
        finish.classList.add("screen-win-two");
        message.textContent = "Player 2 wins!";
    } else if (tracknoughtsandcrosses === null) {
        finish.classList.add("screen-win-tie");
        message.textContent = "It's a draw!";
    }
}
// reset board
const reset = () => {
    player1.classList.remove("active");
    player2.classList.remove("active");
    if (finish.classList.contains("screen-win-one")) {
        finish.classList.remove("screen-win-one");
    }
    if (finish.classList.contains("screen-win-two")) {
        finish.classList.remove("screen-win-two");
    }
    if (finish.classList.contains("screen-win-tie")) {
        finish.classList.remove("screen-win-tie")
    }
    finish.style.display = "none";
    start.style.display = "block";
    tracknoughtsandcrosses = true;
    chosenBoxTracker.length = 0;
    player1ChosenBox.length = 0;
    player2ChosenBox.length = 0;
    counter = 0;
    for (t = 0; t < box.length; t++) {
        if (box[t].classList.contains("box-filled-1") || box[t].classList.contains("box-filled-2")) {
            box[t].style.backgroundImage = "none";
            box[t].addEventListener("mouseenter", enterListener);
            box[t].addEventListener("mouseleave", leaveListener);
            box[t].classList.remove("box-filled-1");
            box[t].classList.remove("box-filled-2");
        }
    }
}