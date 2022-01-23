// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius;
  }

  get pi(){
    return Math.PI
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return 2*this.pi*this.radius 
  }

  get area(){
    return this.pi*this.radius**2
  }

  set diameter(diameter){
    this.radius = diameter/2
  }

  set circumference(circumference){
    this.radius = circumference/(this.pi*2)
  }

  set area(area){
    let testarea = Math.sqrt(area/this.pi)
    this.radius = testarea
  }
}

let newCircle = new Circle(1)

console.log(newCircle.area)