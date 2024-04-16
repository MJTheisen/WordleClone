    
    
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
    })


}