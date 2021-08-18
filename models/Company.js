const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');

const Company = db.define('Company', {
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
});

Company.associate = models => {
  Company.Users = Company.belongsToMany(models.Users, {
    as: 'users',
    through: 'UsersCompanies',
    primaryKey: true
  });
};

Company.belongsTo(User);

module.exports = Company;
