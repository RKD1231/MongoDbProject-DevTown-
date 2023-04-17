
const express = require("express");

 const router = express.Router(); //what is the functionality of Router()?

 const {users} =require("../data/users.json");

 const {UserModel , BookModel} = require("../models/index");

 const {getAllUser,getSingleUserById,deleteUser,updateUserById,addNewUser,getSubscriptionDetailsById} = require("../controllers/user-controller");

/**
 * Route: /users
 * method: get
 * Description: get all users
 * Access: public
 * parameters: None
 */
// router.get("/",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         data: users
//     })
// })

router.get("/",getAllUser);

/**
 * Route: /users/:id
 * method: get
 * Description: get single user by id
 * Access: public
 * parameters: None
 */


// router.get("/:id",(req,res)=>{
//     const {id}=req.params;// params means it is a parameter and it contains many things
//     const user = users.find((each)=> each.id=== id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message: "user does not exist"
        
//         });
//     }
//     return res.status(200).json({  //now here we can use else block but since within a function
//         success:true,             //return statement can only be executed once
//         message: "User found",   //so we can use return statements that property here
//         data: user           //if the first return dose't work then the control will shift to the next line
//     });
    
// });

router.get("/:id",getSingleUserById);


/**
 * Route: /users/
 * method: post
 * Description: creating a new user
 * Access: public
 * parameters: None
 */
/**      we need to finish it */
// router.post("/",(req,res)=>{
//     const {id, name, surname,email,subscriptionType,subscriptionDate}=req.body;
//     const user =users.find((each)=> each.id == id);
//     if (user) {
//         return res.status(404).json({
//             success: false,
//             message:"It is a existing user id"
//         })
//     }
//     users.push({
//         id,
//         name,
//         surname,
//         email,
//         subscriptionType,
//         subscriptionDate
//     });
//     return res.status(201).json({
//         success:true,
//         message:"we have added a new user",
//         New_updated_data: users
//     })
// })

router.post("/",addNewUser);

/**
 * Route: /users/:id
 * method: put
 * Description: udating user by id
 * Access: public
 * parameters: id
 */
// router.put("/:id",(req,res)=>{
//     const {id}=req.params;// params means it is a parameter and it contains many things
//     const {data} = req.body;
//     const user = users.find((each)=> each.id=== id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message: "user does not exist"
        
//         });
//     } 
//     const UpdateUserData= users.map((each)=>{
//         if (each.id===id) {
//             return {
//                 ...each,// it indicates valuse that are associated with the given id
//                 ...data,// it indicates the values that are passed into our body
//             };
//         }
//         return each;
//     });
//     res.status(200).json({
//         success: true,
//         message:"User updated !!",
//         data : UpdateUserData
//     })
    
// })

router.put("/:id",updateUserById);

/**
 * Route: /users/:id
 * method: delete
 * Description: delete a user by there id
 * Access: public
 * parameters: id
 */

// router.delete("/:id",(req,res)=>{
//     const {id}=req.params;// params means it is a parameter and it contains many things
//     // const {data} = req.body;
//     const user = users.find((each)=> each.id=== id);//it would return a id through "id" variable if id==each.id satisfies
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message: "user does not exist"
        
//         });
//     }
//     const index = users.indexOf(user);
//     users.splice(index, 1);
//     return res.status(200).json({
//         success:true,
//         message:"Data is deleted successfilly",
//         data:users

//     });

// });

router.delete("/:id",deleteUser);

/**
 * Route: /subscription-details/:id
 * method: get
 * Description: get all user subscription details
 * Access: public
 * parameters: id
 */


// router.get("/subscription-details/:id",(req,res)=>{
//     const {id} = req.params;
//     const user=users.find((each)=> each.id === id);
//     if (! user) {
//         return res.status(404).json({
//             success:false,
//             message:"user with the id didnt exist"
//         });
//     }
//     const getDateInDays = (data = "") =>{ //here we are passing a default value as blank
//         let date;
//         if (data === "") {
//             date=new Date();
//         }
//         else{
//             date= new Date(data);
//         }
//         let days=Math.floor(date /(1000*60*60*24)); // it will return the number of days passsed between today and the date passed as an parameter
//         return days;
//     };
//     const subscriptionType = (date) =>{
//         if (user.subscriptionType == "Basic") {
//             date=date+90;
//         }
//         else if(user.subscriptionType == "standard"){
//             date=date+180;
//         }
//         else if(user.subscriptionType == "Premium"){
//             date=date+365;
//         }
//         return date;
//     };
//     let returnDate = getDateInDays(user.returnDate);
//     let currentDate = getDateInDays();
//     let subscriptionDate = getDateInDays(user.subscriptionDate);
//     let subscriptionExpiration = subscriptionType(subscriptionDate);

//     const data ={
//         ...user,
//         issubscriptionExpired :subscriptionExpiration < currentDate,
//         daysLeftForExpiration : subscriptionExpiration <= currentDate ? 0 :subscriptionExpiration - currentDate,
//         fine:
//             returnDate < currentDate
//                 ? subscriptionExpiration <= currentDate
//                     ? 100
//                     : 50
//                 :0

//     };
//     return res.status(200).json({
//         success: true,
//         message: "Subscription detail for the user is:",
//         data
//     })
// });

router.get("/subscription-details/:id",getSubscriptionDetailsById);

module.exports = router; //why we are writing this command?