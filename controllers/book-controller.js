const { UserModel, BookModel } = require("../models");

const IssueddBook = require("../dtos/book-dto");
const bookModel = require("../models/book-model");


exports.getAllBooks = async (req, res) => {
    const books = await BookModel.find();
    if (books.length == 0) {
        return res.status(404).json({
            success: false,
            message: "No book found"
        });
    }
    res.status(200).json({
        success: true,
        data: books
    });
};
//exports.getAllBooks =()=> {} we can write in this way also

exports.getSingleBookById = async (req, res) => {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    if (!book) {
        return res.status(404).json({
            success: false,
            message: "this id does't exist"
        });
    }
    return res.status(200).json({
        success: true,
        message: "fetching the book",
        data: book
    });
};

exports.getAllIssuedBooks = async (req, res) => {

    const users = await UserModel.find({
        issuedBook: { $exist: true }
    }).populate("issuedBook");


    //DTO>> Data transfer object
    const issuedbooks = users.map((each) => new IssueddBook(each));

    // const issuedbooks =user.map((each)=> new issuedbooks());

    if (issuedbooks.lenth === 0) {
        return res.status(404).json({
            success: false,
            message: "No book have been issued yet..."
        });
    } return res.status(200).json({
        success: true,
        message: "User with the issued book",
        data: issuedbooks
    });
}

exports.addNewBook = async(req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(404).json({
            success: false,
            message: "no data too add a book"
        });

    }

    await BookModel.create(data);
    const allBooks = await BookModel.find();

    return res.status(201).json({
        success: true,
        data: allBooks
    });

}
exports.updateBookById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const updatedBook = await BookModel.findOneAndUpdate({
        _id: id
    }, data, { new: true });
    return res.status(200).json({
        success: true,
        message: "book is updated",
        data: updatedBook
    });

}

// module.exports = { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById };