const { area, circumference } = require('./circle')
console.log('area', area(4))
console.log('circumference', circumference(4))

const Square = require('./square')
const square = new Square(4)
console.log(square.area())

console.log("module run from node command prompt (require.main === module)", require.main === module)