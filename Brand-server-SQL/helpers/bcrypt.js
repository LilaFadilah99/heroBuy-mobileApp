const bcrypt = require("bcryptjs");
const { genSaltSync, hashSync, compareSync } = bcrypt;

const hashPassword = (password) => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

const checkPassword = (passwordInput, dbPassword) => {
  return compareSync(passwordInput, dbPassword);
};

module.exports = {
  hashPassword,
  checkPassword,
};
