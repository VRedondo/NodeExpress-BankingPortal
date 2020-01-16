const express = require('express');

const { accounts, writeJSON } = require('../data');

const router = express.Router();

router.get('/transfer', function(req, res) {
  res.render('transfer');
});

router.post('/transfer', function(req, res) {
  const from = req.body.from;
  const to = req.body.to;
  const amount = req.body.amount;
  accounts[from].balance = accounts[from].balance - amount;
  accounts[to].balance = parseInt(accounts[to].balance) + parseInt(amount, 10);
  writeJSON();
  res.render('transfer', { message: 'Transfer Completed'});
});

router.get('/payment', function(req, res) {
  res.render('payment', { account: accounts.credit });
});

router.post('/payment', function(req, res) {
  const amount = req.body.amount;
  accounts.credit.balance = accounts.credit.balance - amount;
  accounts.credit.available = parseInt(accounts.credit.available) + parseInt(amount, 10);
  writeJSON();
  res.render('payment', { message: 'Payment Successful', account: accounts.credit});
});

module.exports = router;