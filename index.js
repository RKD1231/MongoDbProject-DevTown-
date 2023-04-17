const express = require("express");
//const {users} =require("./data/users.json");// Why we are putting the user within flower brackets ?
//const {users,admin} =require("./data/users.json"); in this way we will have multiple variable initialization
//const {books} =require("./data/books.json");

// *************************    DATABASE RELADED CODE   *****************************//
const Dbconnection= require("./databaseconnection");


const dotenv = require("dotenv");
dotenv.config();

Dbconnection();





// *************************    DATABASE RELADED CODE   *****************************//
const userrouter =require('./routes/users');
const booksrouter = require('./routes/books');

const app= express();

const port = 8081;

app.use(express.json());
// }) we need to have specfic condition at the top and generic condition at the bottom 


http:app.get("/",(req,res)=>{
    res.status(200).json({
        message: "server is up and running :-)",

        data:"hey"
    })// we also can use "send()" but we can not send multiple data at the same time
    res.end();
});


app.use("/users",userrouter);
app.use("/books",booksrouter);


app.get("*",(req,res)=>{
    res.status(404).json({
        message:"This root does not exist"
    })
})

app.listen(port,()=>{
    console.log(`The server is running at port no ${port}`);
});