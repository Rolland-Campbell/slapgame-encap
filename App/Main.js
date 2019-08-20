import EnemyController from "./Controllers/enemyController.js"


class App {
  constructor() {
    console.log("App created")
    this.controller = {
      enemyController: new EnemyController(),
    }
  }
}


window["app"] = new App()