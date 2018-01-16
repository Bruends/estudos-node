const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret  = require('../config/auth.json').secret;

const User = require('../models/user');

const router = express.Router();
 
async function generateToken(params = {}, secret) {
  return await jwt.sign(params , secret, { expiresIn: 86400 });
}

router.get('/', async (req, res) => {
  try {
    res.send(await User.find());    
  } catch (err) {
    res.send({error : error});
  }
});

router.post('/register', async (req, res) => { 
  try { 
    const user = await User.create(req.body);    
    user.password = undefined; 
    res.send({
      user,
      token: await generateToken({ id: user.id }, secret)
    });
  } catch (err) {
    res.status(400).send({ error : err.message })
  } 
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if(!user) {
    return res.status(400).send({ error: 'user not found' })
  }

  if(!await bcrypt.compare(password, user.password)){
    return res.status(400).send({error: 'invalid password'})
  }  

  res.send({ 
    user,
    token: await generateToken({ id: user.id }, secret)
  })  
});

module.exports = app => app.use('/auth', router);
