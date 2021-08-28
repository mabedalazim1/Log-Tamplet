const dbConfig = require('../config/db.config.js')


const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: 'SQL5105.site4now.net',
    dialect: 'mssql'
  }
)
async function getData() {
  try {
await sequelize.authenticate()
console.log('Connection has been established successfully.')


  } catch (error) {
console.error('Unable to connect to the database:', error)


  }
};
getData()
const db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize)
db.user = require('../models/user.model.js')(sequelize, Sequelize)
db.role = require('../models/role.model.js')(sequelize, Sequelize)

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId'
})
db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId'
})

db.ROLES = ['admin', 'teacher', 'student', 'moderator', 'user']

// Initial Data


module.exports = db
