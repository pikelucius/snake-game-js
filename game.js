import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood, snakeSpeed } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false


const gameBoard = document.querySelector('.game-board')

const main = (currentTime) => {
  if (gameOver) {
    if (confirm('Du förlorade! Tryck OK för att spela igen.')) {
      window.location = '/'
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

const update = () => {
  updateSnake()
  updateFood()
  checkDeath()


}

const draw = () => {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

const checkDeath = () => {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}