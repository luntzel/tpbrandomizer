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

episodeSelection = getRandomArbitrary(1, numberOfEpisodes)
document.getElementById('episode').innerHTML = episodeSelection
