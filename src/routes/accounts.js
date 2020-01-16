const express = require('express');

const { accounts } = require('../data');

const router = express.Router();

router.get('/savings', function(req, res) {
  res.render('account', { account: accounts.savings });
});

router.get('/credit', function(req, res) {
  res.render('account', { account: accounts.credit });
});

router.get('/checking', function(req, res) {
  res.render('account', { account: accounts.checking });
});

module.exports = router;