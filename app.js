let random = Math.random() * 10;
random = Math.floor(random);
console.log(random);

let count = 0;

function guessFu() {
    let input = document.getElementById("guess").value;
    console.log(input);
    if (random == input) {
        alert("you win");
        newGame();
    } else {
        count++;
    }

    if (count == 3) {
        alert("you are lose");
        // document.getElementById
    }

    document.getElementById("guess").value = "";
}
function newGame() {
    location.reload();
}