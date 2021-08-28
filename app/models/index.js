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
async function getData () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
getData()
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize)

module.exports = db
