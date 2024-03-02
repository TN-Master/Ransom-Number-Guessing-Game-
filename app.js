let random = Math.floor((Math.random() * 10) + 1);
console.log(random);

let hint = document.getElementById("hint");
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
        if (random>input) {
            hint.innerHTML = "The random number is greater than your input number.";
        }else {
            hint.innerHTML = "The random number is less than your input number."
        }
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