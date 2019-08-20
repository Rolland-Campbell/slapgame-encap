import EnemyService from "../Services/enemyService.js";

//PRIVATE
let _enemyService = new EnemyService()

function _draw() {
  let hitsElement = document.querySelector("#hits-enemy")
  let healthElement = document.querySelector("#health-enemy")
  let enemy = _enemyService.enemy
  hitsElement.textContent = enemy.hits.toString()
  healthElement.textContent = enemy.health.toString()
}

//PUBLIC
export default class EnemyController {
  constructor() {
    console.log("enemyController made")
  }
  slap() {
    _enemyService.slap()
    console.log(_enemyService.enemy.health)
    console.log(_enemyService.enemy.hits)
    _draw()
  }
  reset() {
    _enemyService.enemy.health = 100
    _enemyService.enemy.hits = 0
    _draw()
  }
}