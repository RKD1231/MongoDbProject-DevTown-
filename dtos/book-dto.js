//data transfer object

class  IssueddBook{
    _id;
    Name;
    genre;
    price;
    pubsisher;
    issuedBy;
    issuedDate;
    returnDate;
    constructor (user){
        this._id=user.issuedBook._id;
        this._name=user.issuedBook._name;
        this._genre=user.issuedBook.genre;
        this._price=user.issuedBook._price;
        this._publisher=user.issuedBook._publisher;
        this.issuedBy=user.name;
        this.issuedDate=user.issuedDate;
        this.returnDate=user.returnDate;

    }
}
module.exports = IssueddBook;
//var ref = new IssuedBook(userObj);