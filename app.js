let random = Math.random() * 10;
random = Math.floor(random);
console.log(random);

let message = document.getElementById("message");

let count = 3;

function guessFu() {
    let input = document.getElementById("guess").value;
    console.log(input);
    if (random == input) {
        // alert("you win");
        message.innerHTML = "You Win"
        // newGame();
    } else {
        count--;
        message.innerHTML = "You have "+count+" chances to guess";
    }

    if (count == 0) {
        message.innerHTML = "You Lose";
        // alert("you are lose");
    }

    document.getElementById("guess").value = "";
}
function newGame() {
    location.reload();
}