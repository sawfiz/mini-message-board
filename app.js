const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const indexRouter = require('./routes/index')
const newRouter = require('./routes/new')

app.use('/', indexRouter)
app.use('/new', newRouter)



app.listen(3000)