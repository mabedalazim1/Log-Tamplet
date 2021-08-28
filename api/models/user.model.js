module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    adress: {
      type: Sequelize.STRING
    },
    schoolImgUrl: {
      type: Sequelize.STRING
    },
    fullName: {
      type: Sequelize.STRING
    },
    userSchoolId: {
      type: Sequelize.STRING
    }
  })

  return User
}
