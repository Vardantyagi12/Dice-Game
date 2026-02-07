const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');
const dice = document.querySelector('.dice');
const imag1 = ".dice1.png"
const imag2 = ".dice2.png"
const imag3 = ".dice3.png"
const imag4 = ".dice4.png"
const imag5 = ".dice5.png"
const imag6 = ".dice6.png"
//First Dice Function
function diceNum1() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    // if (randomNum === 1) {
    //     dice1.src = imag1
    // } else if (randomNum === 2) {
    //     dice1.src = imag2
    // }
    // else if (randomNum === 3) {
    //     dice1.src = imag3
    // }
    // else if (randomNum === 4) {
    //     dice1.src = imag4
    // }
    // else if (randomNum === 5) {
    //     dice1.src = imag5
    // }
    // else if (randomNum === 6) {
    //     dice1.src = imag6
    // }
    console.log(randomNum);
    dice1.src="./images/dice"+randomNum+".png"
}
//Second Dice Function
function diceNum2() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    // if (randomNum === 1) {
    //     dice2.src = imag1
    // } else if (randomNum === 2) {
    //     dice2.src = imag2
    // }
    // else if (randomNum === 3) {
    //     dice2.src = imag3
    // }
    // else if (randomNum === 4) {
    //     dice2.src = imag4
    // }
    // else if (randomNum === 5) {
    //     dice2.src = imag5
    // }
    // else if (randomNum === 6) {
    //     dice2.src = imag6
    // }
    console.log(randomNum);
    dice2.src="./images/dice"+randomNum+".png"
}
diceNum1()
diceNum2()

