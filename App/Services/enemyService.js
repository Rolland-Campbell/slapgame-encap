import enemy from "../Models/enemy.js";
//PRIVATE
let _enemy = new enemy("Barney")


//PUBLIC
export default class EnemyService {
  constructor() {
    console.log("found enemyService")
  }

  slap() {
    _enemy.hits++
    _enemy.health--
  }

  get enemy() {
    return _enemy
  }
}