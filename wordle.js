    
    
    // Michael Theisen 
    // 04/15/2024


var height = 6; // number of guess
var width = 5; // length of the word

var row = 0; // current guess attempt number
var col = 0; // current letter for that attempt

var gameOver = false; // boolean for win condition
var word = "SQUID"; // using SQUID for temp. 
// update to list or pull from server for a fullstack project

window.onload = function(){
    initialize();
}

function initialize() {
    // create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // create a new html element
            // <span id="0-0" class="tile"></span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);

        }
    }

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if (gameOver) return; // constantly listen for a key press
        
        // alert(e.code); // to see what key is pressed.
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + "-" + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3]; // we dont want the word "Key" from "KeyA"
                    col += 1;

                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + "-" + col.toString());
            currTile.innerText = "";
        }
        else if (e.code == "Enter") {
            update();
            row += 1; // this will start a new row
            col = 0; // this will start at the 0 position for the new row 
        }
        if (!gameOver && row == height) { // used up all attempts. 
            gameOver = true; 
            document.getElementById("answer").innerText = word;
        }

    })


}

function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;

        // Is the letter in the correct position? green = correct
        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        }

        // Is the letter in the word? yellow = present
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        }
        
        // Is the letter not even in the word? gray = absent
        else {
            currTile.classList.add("absent");
        }

        // 
        if (correct == width) {
            gameOver = true;
        }
    }
} 