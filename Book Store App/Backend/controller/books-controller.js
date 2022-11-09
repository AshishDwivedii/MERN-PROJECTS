
const Book = require('../models/Book');

const getAllBooks = async (req,res,next)=>{
    let books;
    try{
        books = await Book.find();
    }catch(err){
        console.log("error in fetching book",err)
    }
    if(!books){
        return res.status(404).json({message: "No Products Found"});
    }
    return res.status(200).json({ books });
}

const addBook = async(req,res,next)=>{
    const { name, author, description, price, available, image} = req.body;  //object destructuring
    let book;
    try {
        book = new Book({  //by features of es6
            name,
            author,
            description,
            price,
            available,
            image
        })

        await book.save();
        
    } catch (error) {
        console.log("error in adding the book", error)
    }

    if(!book){
        return res.status(500).json({message:"unable to add book"});
    }

    return res.status(201).json({book});

}

//fetching the book by id
 const getById = async(req,res,next)=>{
    let id = req.params.id;
    try {
        book = await Book.findById(id); 
    } catch (error) {
        console.log("error in getting the book by id", error)
    }

    if(!book){
        return res.status(500).json({message:"Unable to get the book by id"})
    }
    return res.status(201).json({book});
 }

 const updateBook = async(req,res, next)=>{
    let id = req.params.id;
    const { name, author, description, price, available, image} = req.body;  //object destructuring
    let book;
    try {
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
         
    } catch (error) {
        console.log("error in updating the book", error)
        
    }
    if(!book){
        return res.status(404).json({message:"Unable to update book by that ID"})
    }
    return res.status(200).json({book});
 }

 const deleteBook = async(req, res, next)=>{
    let id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (error) {
        console.log("error in deleting the book", error);
    }
    if(!book){
        return res.status(404).json({message:"Unable to delete book by that ID"})
    }
    return res.status(200).json({message:"Product successfully deleted"});
 }


 
 //exporting the controllers of the book
exports.getAllBooks= getAllBooks; 
exports.addBook = addBook;
exports.getById= getById;
exports.updateBook= updateBook;
exports.deleteBook= deleteBook;