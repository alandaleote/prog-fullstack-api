module.exports = app => {
  const books = require('../controllers/book.controller')
  let router = require('express').Router()

  router.post("/", books.create);
  router.get("/", books.findAll);
  router.get("/avaliable", books.findAllAvaliable);
  router.get("/:id", books.findById);
  router.put("/:id", books.update);
  router.delete("/:id", books.delete);
  app.use('/api/books', router);
}
