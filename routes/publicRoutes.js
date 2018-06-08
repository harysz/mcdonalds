const express = require('express');
const router = express.Router();
const fs = require('fs');
const categories = require('../data/categories');
const menu = require('../data/menu');
const Item = require('../models/itemModel');

router.get('/api/welcome', (req, res) => {
  res.json({
    message: 'Welcome!',
    url: '/images/heroimage.png',
      adm:'/images/fishcig.jpg'
  })
});
router.get('/api/categories', (req, res) => {
  res.json({categories})
});

router.get('/api/menu', async (req, res) => {
  try{
    console.log('fetching menu');
    // uzklausa i DB
    // res.json({menu})
    const menu =await Item.find({});
    res.send({menu:menu})
  }catch (err){
    console.log(err);
  }
});

router.post('/api/orders', (req, res) => {
  // console.log(req.body);
    console.log('new order!');
    const io=req.app.get('socketio');
    io.emit('order', req.body)
  const {name, address, phone, orders} = req.body;

  const ordersString = orders.reduce((total, item)=>{
    return total+ `${item.name} ${item.price} \n`
  },'');

  const order = `
=============================\n
name: ${name}\n 
address: ${address}\n 
phone: ${phone}\n
orders:\n
${ordersString}
`;

  fs.appendFile('order.txt', order, (err)=>{
    if(err) console.log(err);
  });
  res.send('ok')
});

module.exports = router;