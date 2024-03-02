let random = Math.floor((Math.random() * 10) + 1);
// console.log(random);

let message = document.getElementById("message");

let count = 3;

function guessFu() {
    let input = document.getElementById("guess").value;
    console.log(input);
    if (random == input) {
        // message.innerHTML = "You Win"
        alert("you win");
        newGame();
    } else {
        count--;
        message.innerHTML = "You have "+count+" chances to guess";
    }

    if (count == 0) {
        // message.innerHTML = "You Lose";
        alert("you are lose");
        newGame();
    }

    document.getElementById("guess").value = "";
}
function newGame() {
    location.reload();
}