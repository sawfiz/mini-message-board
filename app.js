const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Mini Message Board')
})

app.listen(3000)