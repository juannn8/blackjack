// let firstCard = 10
// let secondCard = 7
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true
// let message = ''
// let messageEl = document.getElementById('message-el')
// let sumEl = document.querySelector('#sum-el')
// let cardsEl = document.querySelector('#cards-el')

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     sumEl.textContent = 'Sum: ' + sum
//     cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1]
//     if (sum <= 20) {
//         message = 'Do you want to draw a new card?'
//     } else if (sum === 21) {
//         message = 'Woohoo! You\'ve got Blackjack!'
//         hasBlackjack = true
//     } else {
//         message = 'You\'re out of the game!'
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log('Drawing a new card from the deck!')
//     let card = 4
//     sum += card
//     startGame()
// }

// let cards = [2, 7]
// cards.push(8)
// console.log(cards)

let messages = [
    'Hey, how\'s it going?',
    'I\'m great, thank you! How about you?',
    'All good. Been working on my portfolio lately.'
]

let newMessage = 'Same here!'

messages.push(newMessage)

console.log(messages)

messages.pop()

console.log(messages)