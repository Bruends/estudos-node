const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const User = require('../models/user');

const router = express.Router();
 
function generaToken(params = {}) {
  return jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: 86400 });
}

router.get('/', async (req, res) => {
  res.send(await User.find());
});

router.post('/register', async (req, res) => { 
  try { 
    const user = await User.create(req.body);    
    user.password = undefined; 
    res.send({
      user,
      token: generaToken({ id: user.id })
    });
  } catch (err) {
    res.status(400).send({error: 'register failed'})
  } 
});

router.post('/autenticate', async (req, res) => {
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
      token: generaToken({ id: user.id })
    })
});

module.exports = app => app.use('/auth', router)