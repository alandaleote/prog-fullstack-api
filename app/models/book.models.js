module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('Book', {
    isbn: {
      type: Sequelize.INTEGER,
      autoIncrement: false,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false
    },
    publisher: {
      type: Sequelize.STRING,
      allowNull: false
    },
    year: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    avalible: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  })

  return Book;
}
