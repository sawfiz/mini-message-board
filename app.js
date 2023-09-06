const express = require('express')
const app = express()
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.render('index', {title: 'Mini Message Board'})
// })

const indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(3000)