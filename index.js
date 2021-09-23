var express = require('express')
var path = require('path')
var hbs = require('hbs')

var app = express()

// Define paths for Express config
const viewsPath = path.join(__dirname, './templates/views')
const publicDirectoryPath = path.join(__dirname, './public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', function (req, res) {
  return res.sendFile(`${viewsPath}/homepage.html`)
})

app.get('/contact', function (req, res) {
  return res.sendFile(`${viewsPath}/contact.html`)
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running')
})