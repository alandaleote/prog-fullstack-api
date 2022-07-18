module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define('Book', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    isbn: {
      type: Sequelize.STRING,
      autoIncrement: false,
      allowNull: false,
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
      type: Sequelize.INTEGER,
      allowNull: false
    },
    avaliable: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  })

  return Book;
}
