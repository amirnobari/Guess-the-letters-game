const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const myArry = ["امیر", "سارا", "رامین", "مامان", "سعید", "حسام"];
let inplay = false;
let scramble = "";
let scrambled = "";
let score = 0;
button.addEventListener("click", myfunction);
function myfunction() {
    if (!inplay) {
        inplay = true;
        button.innerHTML = "guess";
        guess.classList.toggle("hidden");
        guess.value = "";
        scramble = createword();
        scrambled = randomArray(scramble.split("")).join("");
        message.innerHTML = scrambled;
    } else {
        let tempGuess = guess.value;
        score++;
        if (tempGuess === scramble) {
            inplay = false;
            message.innerHTML = "correct it was" + scramble + "it look " + score + "guesse";
            button.innerHTML = "start";
            guess.classList.toggle("hidden");

        } else {
            message.innerHTML = "Wrong" + scrambled;
        }
    }
};
function createword() {
    let randomindex = Math.floor(Math.random() * myArry.length);
    let tempWord = myArry[randomindex];
    return tempWord;
}
function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}