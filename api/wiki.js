const express = require('express');
const router = express.Router();
const { Page } = require("../models")
const { addPage } = require("../views")
const layout = require('../views/layout')

router.get('/', async (req, res, next) => {
  try {
    res.send(layout(''))
  }catch(err){
    next(err)
  }
})

router.post('/', async(req, res, next) => {
  try{

    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
      // slug:
    })
    res.redirect('/')

    console.log('POST REQUEST')
    console.log(req.body)
  }catch(err){
    next(err)
  }
})

router.get('/add', async(req, res, next) => {
  try{
    res.send(addPage())
  }catch(err){
    next(err)
  }
})

module.exports = router;

