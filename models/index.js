const Sequelize = require('Sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false // Turn off logging SQL commands in console
})

const Page = db.define('page', {
  title:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      msg: "Enter Title here"
    }
  },

  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
      msg: "Enter URL here"
    }
  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      msg: "Enter your post here"
    }

  },

  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false,
    validate: {
      equals: ('open' || 'closed')
    }
  }
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      msg: 'Please enter your name'
    }
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      msg: 'Please enter your email'
    }
  }
})

module.exports = {
  db,
  Page,
  User
}
