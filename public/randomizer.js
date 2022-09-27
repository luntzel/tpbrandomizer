/* eslint no-var: off */
var seasonSelection, numberOfEpisodes, episodeSelection

function getRandomArbitrary (min, max) {
  return Math.floor(Math.random() * (max - min) + min) + 1
}

// calculate seasonSelection
seasonSelection = getRandomArbitrary(1, 12)
document.getElementById('season').innerHTML = seasonSelection

// calcuate episodeSelection based on seasonSelection
if (seasonSelection === 1) {
  numberOfEpisodes = 6
} else if (seasonSelection === 2) {
  numberOfEpisodes = 7
} else if (seasonSelection === 3) {
  numberOfEpisodes = 7
} else if (seasonSelection === 4) {
  numberOfEpisodes = 8
} else if (seasonSelection === 5) {
  numberOfEpisodes = 10
} else if (seasonSelection === 6) {
  numberOfEpisodes = 6
} else if (seasonSelection === 7) {
  numberOfEpisodes = 10
} else if (seasonSelection === 8) {
  numberOfEpisodes = 10
} else if (seasonSelection === 9) {
  numberOfEpisodes = 10
} else if (seasonSelection === 10) {
  numberOfEpisodes = 10
} else if (seasonSelection === 11) {
  numberOfEpisodes = 10
} else {
  numberOfEpisodes = 10
}

// weigh Sebastian Bach episodes higher
if (seasonSelection === 7) {
  var n=Math.floor(Math.random()*100)
  switch(n){
    case n<25:
      episodeSelection = 4;
      break;
    case n<50:
      episodeSelection = 5;
      break;
    case n<75:
      episodeSelection = 10;
      break;
    default:
      episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
  }
}

if (seasonSelection === 8) {
  var n=Math.floor(Math.random()*100)
  switch(n){
    case n<50:
      episodeSelection = 4;
      break;
    default:
      episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
  }
}


document.getElementById('episode').innerHTML = episodeSelection
