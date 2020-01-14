const path = require('path');
const fs = require('fs');

const accountData = fs.readFileSync('src/json/accounts.json', { encoding: 'utf8' });
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync('src/json/users.json', { encoding: 'utf8' });
const users = JSON.parse(userData);

const writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts);
  fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'utf8');
};

module.exports = {
  writeJSON,
  users,
  accounts
};
