import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

const EXPANSION_RATE = 3
export let pointsElement = document.querySelector('[data-points]')
const SNAKE_SPEED = 3
export let snakeSpeed = SNAKE_SPEED

export const update = () => {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        pointsElement.innerHTML++

    }
}


export const draw = (gameBoard) => {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)

    
}

const getRandomFoodPosition = () => {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
      newFoodPosition = randomGridPosition()
  }
  if(parseInt(pointsElement.innerHTML) !== 0 && parseInt(pointsElement.innerHTML) % 3 === 0) snakeSpeed++
  return newFoodPosition
}

let food = getRandomFoodPosition()
