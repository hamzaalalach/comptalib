const Sequelize = require('sequelize');
const db = require('../config/database');
const Company = require('./Company');

const User = db.define('User', {
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

User.associate = models => {
  User.Companies = User.belongsToMany(models.Companies, {
    as: 'companies',
    through: 'UsersCompanies',
    primaryKey: true
  });
};

module.exports = User;
