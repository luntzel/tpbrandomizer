var var1, var2, var3;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min) + 1 ;
}

// calculate season
var1 = getRandomArbitrary(1,12);
document.getElementById("season").innerHTML = var1;

// calcuate episode based on season
if (var1 = 1) {
  var2 = 6
} else if (var1 = 2) {
  var2 = 7
} else if (var1 = 3) {
  var2 = 7
} else if (var1 = 4) {
  var2 = 8
} else if (var1 = 5) {
  var2 = 10
} else if (var1 = 6) {
  var2 = 6
} else if (var1 = 7) {
  var2 = 10
} else if (var1 = 8) {
  var2 = 10
} else if (var1 = 9) {
  var2 = 10
} else if (var1 = 10) {
  var2 = 10
} else if (var1 = 11) {
  var2 = 10
} else {
  var2 = 10
}

var3 = getRandomArbitrary(1, var2);
document.getElementById("episode").innerHTML = var3;
