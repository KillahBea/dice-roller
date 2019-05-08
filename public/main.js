let diceRoll = 4

const rollTheDice = () => {
  // gen a random for targetNumber
  diceRoll = Math.ceil(Math.random() * 6)
  console.log('You rolled a ' + diceRoll)
  document.querySelector('.result').textContent = diceRoll
}

document.querySelector('button').addEventListener('mousedown', rollTheDice)
