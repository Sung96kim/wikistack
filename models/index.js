const Sequelize = require('Sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false // Turn off logging SQL commands in console
})

const Page = db.define('page', {
  title:{
    type: Sequelize.STRING,
    allowNull: false,
  },

  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  content: {
    type:Sequelize.TEXT,
    allowNull: false,
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
      isAlpha: true
    }
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = {
  db,
  Page,
  User
}
