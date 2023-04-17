const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
const {getAllBooks,getSingleBookById,getAllIssuedBooks,addNewBook,updateBookById} = require("../controllers/book-controller");
const router = express.Router();//what is the functionality of Router()?

// router.use(express.json());

const {UserModel , BookModel} = require("../models/index");


/**
 * Route: /books
 * method: get
 * Description: get all books
 * Access: public
 * parameters: None
 */


// router.get("/", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Fetching all the books",
//         data: books
//     })
// })


router.get("/", getAllBooks );


/**
 * Route: /issued
 * method: get
 * Description: get all issued books
 * Access: public
 * parameters: None
 */


// router.get("/issued/by_user", (req, res) => {

//     const userwithissuedbook = users.filter((each) => {
//         if(each.issuedBook) return each;
//     });
//     const issuedbooks = [];
//     userwithissuedbook.forEach((each)=>{
//         const book = books.find((book)=> ( book.id === each.issuedBook ));


//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;
//         issuedbooks.push(book);
//     });

//     if (issuedbooks.lenth === 0) {
//         return res.status(404).json({
//             success: false,
//             message: "No book have been issued yet..."
//         })
//     } return res.status(200).json({
//         success: true,
//         message: "User with the issued book",
//         data: issuedbooks
//     });
// });

router.get("/issued/by_user", getAllIssuedBooks);

/**
 * Route: /:id
 * method: get
 * Description: get book by id
 * Access: public
 * parameters: id
 */

// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     const book = books.find((each) => each.id == id);
//     if (!book) {
//         return res.status(404).json({
//             success: false,
//             message: "this id does't exist"
//         });
//     }
//     return res.status(200).json({
//         success: true,
//         message: "fetching the book",
//         data: book
//     });
// });


router.get("/:id", getSingleBookById);

/**
 * Route: /
 * method: post
 * Description: adding a new book
 * Access: public
 * parameters: none
 *  Data:name,id,author,genre, price,pubisher
 */

// router.post("/",(req,res)=>{
//     // const {id}=req.params
//     const {data} =req.body;
//     if (! data) {
//         return res.status(404).json({
//             success:false,
//             message:"no data too add a book"
//         })
        
//     }
//     const book=books.find((each)=> each.id==data.id);
//     if (book) {
//         return res.status(404).json({
//             success:false,
//             message:"The book id is already present"
//         })
//     }
//     const allbooks= {...books, data};
//     return res.status(201).json({
//         success:true,
//         data: allbooks
//     })
// })

router.post("/", addNewBook);

/**
 * Route: /:id
 * method: put
 * Description: update a book by there id
 * Access: public
 * parameters: id
 *  Data:name,id,author,genre, price,pubisher
 */

//router.put("/update/:id",(req,res)=>{
//     const {id} = req.params;
//     const {data}= req.body;

//     const book =books.find((each)=> each.id == id);
//     if(!book){
//         return res.status(404).json({
//             success:false,
//             message:"The requested book is not found"
//         });
//     }
//     const updatedata = books.map((each)=>{ 
//         if (each.id==id) {
//             return {
//                 ...each,
//                 ...data
//             }
//         }
//         return each;// why we are writing "return each" here ?
//     });
//     return res.status(200).json({
//         success:true,
//         message:"book is updated",
//         data: updatedata
//     });
// });
// updateBookById

router.put("/update/:id", updateBookById);



module.exports = router;