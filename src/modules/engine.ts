import { Car } from './car';

export class Engine {
  car:Car = new Car()
  driving:any
  fps:number = 25

  constructor () {
    this.car.placeCar(600, 400)
  }
  play () {
    this.driving = setInterval(() => {this.car.animate()}, this.fps)
  }
}
