const express = require('express');
const morgan = require('morgan')
const app = express()
const views = require('./views')
const layout = require('./views/layout')

const PORT = 8080;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res)=>{
  res.send(layout(''))
})

app.listen(PORT, () => {
  console.log(`LISTENING TO PORT ${PORT}`)
})

