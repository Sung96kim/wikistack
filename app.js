const express = require('express');
const morgan = require('morgan')
const app = express()
// const views = require('./views')
const layout = require('./views/layout')
const {db, Page, User} = require('./models')

const PORT = 8080;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));

db.authenticate().then(()=>{
  console.log('Connected to the database')
})

app.get('/', (req, res)=>{
  res.send(layout(''))
})

const start = async () => {
  await db.sync({force: true});
  await Page.sync();
  await User.sync();

  app.listen(PORT, () => {
    console.log(`LISTENING TO PORT ${PORT}`)
  })
}

start();
