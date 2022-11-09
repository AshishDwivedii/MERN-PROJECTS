const express= require('express')
const router= express.Router();
const booksContoller = require('../controller/books-controller');

router.get('/',booksContoller.getAllBooks);
router.get('/:id',booksContoller.getById);
router.post('/',booksContoller.addBook);
router.put('/:id',booksContoller.updateBook);
router.delete('/:id', booksContoller.deleteBook);

module.exports = router;