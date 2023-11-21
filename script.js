
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let newCardMessage = ""

let player = {
  name: "Heimdel",
  chips: 1000
  // sayHello: function () {
  //   console.log("Heisann!")
  // }
}
// player.sayHello

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": #" + player.chips

let cardsEl = document.getElementById("cards-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let messageEl = document.getElementById("message-el");

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; // 1 - 13
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber >= 10) {
    return 10
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomNumber()
  let secondCard = getRandomNumber()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  continueGame()
}

function continueGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
  } else {
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {

    let card = getRandomNumber();
    sum += card;

    cards.push(card);
    continueGame();
  }
}




// let sages = [
//   "Hey, how's it going?",        
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
//   "Great to hear" // this dosn't show on the console
//    "🙌"
// ]

// // DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// Use this method instead:
// for (let i = 0; i < sages.length; i++) {
//   console.log(sages[i])
// }