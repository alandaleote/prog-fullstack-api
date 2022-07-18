const db = require('../database/index')
const Book = db.book
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  const book = {
    isbn: req.body.isbn,
    name: req.body.name,
    author: req.body.author,
    publisher: req.body.publisher,
    year: req.body.year
  }
  try {
    const newBook = await Book.create(book)
    res.status(201).json(newBook);
  } catch (err) {
    throw err;
  }
};

exports.findAll = async (req, res) => {
  try {
    const allBooks = await Book.findAll()
    res.json(allBooks);
  } catch (err) {
    throw err;
  }
};

exports.findById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findByPk(id)
    res.json(book);
  } catch (err) {
    throw err;
  }
};

exports.findAllAvaliable = async (req, res) => {
  try {
    const avaliableBooks = await Book.findAll({ where: { avaliable: true } })
    res.json(avaliableBooks)
  } catch (err) {
    throw err;
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Book.update(req.body, {
      where: { id: id }
    })
    res.json(response)
  } catch (err) {
    throw err;
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    Book.destroy({
      where: { isbn: id }
    })
    res.json(response)
  } catch (err) {
    throw err;
  }
};
