import Book from "../models/Book.js";

const getAllBooks = (req,res) => {
console.log('GET ALL BOOKS');
};

const createBook = async (req,res) =>{
   try {
    const {title, author} = req.body ;
    const existingBook = await Book.findOne({title,author});

    if(existingBook){
       return res
       .status(400)
       .json({error : `A Book with same title and author already exist ! `}); 
    }

    const newBook = await Book.create(req.body);

    return res.status(201).json({message: "Book Created succesfully", Book: newBook});
   } catch (error) {
    //handle mongoose validation error
    if(error.name === `ValidationError`){

    const validationErrors={};
    for(let field in error.errors){
        validationErrors[field] = error.errors[field].message ; 
    }
    return res
            .status(400)
            .json({error : `Validation error` , validationErrors}) ;
   } else {
    return res.status(500).json({error : `Internal Server Error`});
     }
   }
};
export {getAllBooks , createBook };