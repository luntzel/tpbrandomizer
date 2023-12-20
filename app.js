/* eslint no-var: off */
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// Render static files
app.use(express.static('public'))
app.listen(4000, () => {
  console.log('Server running on port 4000')
})