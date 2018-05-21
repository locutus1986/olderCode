function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

var d6 = new Dice(6);
var d10 = new Dice(10);

console.log(d6.roll === d10.roll);