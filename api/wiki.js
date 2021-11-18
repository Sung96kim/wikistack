const express = require('express');
const router = express.Router();
const client = require("../models")
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
    console.log('POST REQUEST')
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

