import { Car } from './car';

export class Engine {
  car:Car = new Car()
  driving:any
  fps:number = 25;

  constructor () {

  }
  play () {
    this.driving = setInterval(() => {this.car.animate()}, this.fps)
  }
}
