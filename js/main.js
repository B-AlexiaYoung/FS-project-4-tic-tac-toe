//variables

const board = document.getElementById("board");
const startButton = document.getElementsByClassName("button");
const start = document.getElementById("start");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const boxes = document.getElementsByClassName("boxes");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box5");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
console.log(box1);
const chosenBoxTracker = [];
let player1ChosenBox = [];
let player2ChosenBox = [];
let counter = 0;



//hide board at start of game
board.style.display = "none";

//listener on button to remove start screen and reveal gameboard
startButton[0].addEventListener("click", (event) => {
    start.style.display = "none";
    board.style.display = "block";
})

//make start player active,  O is player 1;
player1.classList.add("class", "active");

//===============================================
//                  LISTENERS
//===============================================

//listener on button to remove start screen and reveal gameboard
startButton[0].addEventListener("click", (event) => {
    start.style.display = "none";
    board.style.display = "block";


});
let tracknoughtsandcrosses = true;

//listener on boxes for gameplay (on the ul)
boxes[0].addEventListener("click", (event) => {
    console.log(tracknoughtsandcrosses);
    if (tracknoughtsandcrosses === true) {
        tracknoughtsandcrosses = noughts(event);
    } else if (tracknoughtsandcrosses === false) {
        tracknoughtsandcrosses = crosses(event);
    }

    if (counter >= 3) {
        checkWinDraw();
    }
})


//helper for boxes listener

const noughts = (event) => {
    console.log(event.target);
    counter = counter + 1;
    console.log(counter);
    let chosenBox = event.target;
    player1.classList = "active";
    console.log(chosenBox.classList.contains("box-filled-2"));
    console.log(chosenBox.classList.contains("box-filled-1"));

    if (chosenBox.classList.contains("box-filled-2") || chosenBox.classList.contains("box-filled-1")) {
        
        return true;
    } else {
        chosenBox.classList.add( "box-filled-1")
       
        boxnum = chosenBox.getAttribute("id");

        if (chosenBox.classList.contains("box-filled-2") === false /*|| chosenBox.classList.contains("box-filled-1")===true*/ ) {
            console.log(chosenBox.classList.contains("box-filled-2"+ "no boxfilled 2"));
            console.log(chosenBox.classList.contains("box-filled-1" + "no boxfilled 1"));

            console.log(player1ChosenBox.indexOf(boxnum));

            if (player1ChosenBox.indexOf(boxnum) === -1) {
                player1ChosenBox.push(boxnum);
            }
        }
        console.log(event.target);
        player1.classList.remove("active");
        console.log(event.target);
        player2.classList.add("active");
        console.log(event.target);

        return false;
        //show player 1 symbol
        // push player 1 to box Id box1
    }
}



const crosses = (event) => {
    let chosenBox = event.target;
    counter = counter + 1;
    console.log(counter+ "counter");
    player2.classList = "active";
    if (chosenBox.classList.contains("box-filled-2") || chosenBox.classList.contains("box-filled-1")) {
        return false;
    } else {

        chosenBox.classList.add("box-filled-2")
        
        boxnum = chosenBox.getAttribute("id");
       
        if (chosenBox.classList.contains("box-filled-1") === false /*|| chosenBox.contains("box-filled-2")===true */ ) {
            console.log(chosenBox.classList.contains("box-filled-1"));
            console.log(player2ChosenBox.indexOf(boxnum));
            if (player2ChosenBox.indexOf(boxnum) === -1) {

                player2ChosenBox.push(boxnum);
            }
        }
        console.log(event.target);

        player2.classList.remove("active");
        console.log(event.target);

        player1.classList.add("active");
        console.log(event.target);

        console.log(player2ChosenBox + "player2 chosen boxes");
       
        return true;
    }
}

// funtion to check for win or draw
const checkWinDraw = () => {


    // check for win
    let monkey = player1ChosenBox.includes("box1", "box2", "box3");
    console.log(monkey);
//player 1 win
    if (player1ChosenBox.includes("box1") && player1ChosenBox.includes("box2") && player1ChosenBox.includes("box3")) {
        console.log("player 1 wins");
    } else if (player1ChosenBox.includes("box1") && player1ChosenBox.includes("box4") && player1ChosenBox.includes("box7")) {
        console.log("player 1 wins");
    } else if (player1ChosenBox.includes("box1") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box9")) {
        console.log("player 1 wins");
    } else if (player1ChosenBox.includes("box4") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box6")) {
        console.log("player 1 wins");
    } else if (player1ChosenBox.includes("box2") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box8")) {
        console.log("player 1 wins");
    } else if (player1ChosenBox.includes("box3") && player1ChosenBox.includes("box6") && player1ChosenBox.includes("box9")) {
        console.log("player 1 wins");
    } else if (player1ChosenBox.includes("box7") && player1ChosenBox.includes("box8") && player1ChosenBox.includes("box9")) {
        console.log("player 1 wins");
    } else if (player1ChosenBox.includes("box7") && player1ChosenBox.includes("box5") && player1ChosenBox.includes("box3")) {
        console.log("player 1 wins");
    } //        player 2 win            ==========================
    else if (player2ChosenBox.includes("box1") && player2ChosenBox.includes("box2") && player2ChosenBox.includes("box3")) {
        console.log("player 2 wins");
    } else if (player2ChosenBox.includes("box1") && player2ChosenBox.includes("box4") && player2ChosenBox.includes("box7")) {
        console.log("player 2 wins");
    } else if (player2ChosenBox.includes("box1") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box9")) {
        console.log("player 2 wins");
    } else if (player2ChosenBox.includes("box4") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box6")) {
        console.log("player 2 wins");
    } else if (player2ChosenBox.includes("box2") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box8")) {
        console.log("player 2 wins");
    } else if (player2ChosenBox.includes("box3") && player2ChosenBox.includes("box6") && player2ChosenBox.includes("box9")) {
        console.log("player 2 wins");
    } else if (player2ChosenBox.includes("box7") && player2ChosenBox.includes("box8") && player2ChosenBox.includes("box9")) {
        console.log("player 2 wins");
    } else if (player2ChosenBox.includes("box7") && player2ChosenBox.includes("box5") && player2ChosenBox.includes("box3")) {
        console.log("player 2 wins");
    }else{
        console.log("draw");
    }

}


// needs a mouseover listener to show their symbol