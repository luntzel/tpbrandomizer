/* eslint no-var: off */
var seasonSelection, numberOfEpisodes, episodeSelection

function getRandomArbitrary (min, max) {
  return Math.floor(Math.random() * (max - min) + min) + 1
}

// calculate seasonSelection
// weight seasons 7 and 8 higher because Sebastian that greasy bastard
var x = Math.floor(Math.random() * 100)
//console.log("x= " + x)
if (x <= 40) {
    seasonSelection = 7
} else if (x <= 80) {
    seasonSelection = 8
} else {
    seasonSelection = getRandomArbitrary(0, 12)
}

document.getElementById('season').innerHTML = seasonSelection

// calcuate episodeSelection based on seasonSelection
if (seasonSelection === 1) {
  numberOfEpisodes = 6
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 2) {
  numberOfEpisodes = 7
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 3) {
  numberOfEpisodes = 7
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 4) {
  numberOfEpisodes = 8
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 5) {
  numberOfEpisodes = 10
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 6) {
  numberOfEpisodes = 6
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 7) {
  numberOfEpisodes = 10
  var y = Math.floor(Math.random() * 100)
    if (y <= 25) {
        var episodeSelection = 4
        document.getElementById('bach').innerHTML = "SEBASTIAN BACH!"
    } else if (y <= 50) {
        var episodeSelection = 5
        document.getElementById('bach').innerHTML = "SEBASTIAN BACH!"
    } else if (y <= 75) {
        var episodeSelection = 10
        document.getElementById('bach').innerHTML = "SEBASTIAN BACH!"
    } else {
        var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
    }
  } else if (seasonSelection === 8) {
  numberOfEpisodes = 10
  var z = Math.floor(Math.random() * 100)
  if (z <= 50) {
      var episodeSelection = 10
      document.getElementById('bach').innerHTML = "SEBASTIAN BACH!"
  } else {
      var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
  }
} else if (seasonSelection === 9) {
  numberOfEpisodes = 10
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 10) {
  numberOfEpisodes = 10
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else if (seasonSelection === 11) {
  numberOfEpisodes = 10
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
} else {
  var numberOfEpisodes = 10
  var episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
}

document.getElementById('episode').innerHTML = episodeSelection
