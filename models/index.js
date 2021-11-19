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
    }
  },

  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    hooks: {
      beforeValidate: function generateSlug(title) {
        // Removes all non-alphanumeric characters from title
        // And make whitespace underscore
        return title.replace(/\s+/g, '_').replace(/\W/g, '');
      }
    },
    validate: {
      isUrl: true,
    },

  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    }

  },

  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false,
    validate: {
      equals: ('open' || 'closed')
      //Set default to open
    }
  }
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    }
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
})

module.exports = {
  db,
  Page,
  User
}
