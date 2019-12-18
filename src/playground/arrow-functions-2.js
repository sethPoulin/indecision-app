const multiplier = {
  numbers: [1,3,5],
  multiplyBy: 8,
  multiply(){
    return this.numbers.map(number => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())