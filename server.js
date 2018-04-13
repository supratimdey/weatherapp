const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.render('index')
})
app.set('view engine', 'ejs')
app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})