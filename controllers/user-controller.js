const { UserModel, BookModel } = require("../models");

exports.getAllUser = async (req,res) => {
    const user = await UserModel.find();
    if (user.lenth === 0) {
        return res.status(404).json({
            success: false,
            message: "No user found in DB"
        });
    }
    res.status(200).json({
        success: true,
        message: "this are the user info",
        data: user
    });
}

exports.getSingleUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);//we can also use findById({_id:id})// also find({_id:id})
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not found",

        });
    }
    res.status(200).json({
        success: true,
        message: "user found",
        data: user

    });
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.deleteOne({ _id: id });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not found",

        });
    }
    res.status(200).json({
        success: true,
        message: "user is deleted",
        data: user

    });
}

exports.updateUserById = async ( req,res) => {
    const { id } = req.params;
    const { data } = req.body;
    const user = await UserModel.findOneAndUpdate({ _id: id }, { $set: { ...data } }, { new: true });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not found",

        });
    }
    res.status(200).json({
        success: true,
        message: "user updated",
        data: user

    });
}
exports.addNewUser = async (req, res) => {
    const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;
    const newUser = await UserModel.create({
        name, 
        surname, 
        email, 
        subscriptionType, 
        subscriptionDate
    });
    return res.status(201).json({
        success: true,
        message: "we have added a new user",
        New_updated_data: newUser
    });
}

exports.getSubscriptionDetailsById = async (res, req) => {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not found",

        });
    }
    const getDateInDays = (data = "") => { //here we are passing a default value as blank
        let date;
        if (data === "") {
            date = new Date();
        }
        else {
            date = new Date(data);
        }
        let days = Math.floor(date / (1000 * 60 * 60 * 24)); // it will return the number of days passsed between today and the date passed as an parameter
        return days;
    };
    const subscriptionType = (date) => {
        if (user.subscriptionType == "Basic") {
            date = date + 90;
        }
        else if (user.subscriptionType == "standard") {
            date = date + 180;
        }
        else if (user.subscriptionType == "Premium") {
            date = date + 365;
        }
        return date;
    };
    const data = {
        ...user,
        issubscriptionExpired: subscriptionExpiration < currentDate,
        daysLeftForExpiration: subscriptionExpiration <= currentDate ? 0 : subscriptionExpiration - currentDate,
        fine:
            returnDate < currentDate
                ? subscriptionExpiration <= currentDate
                    ? 100
                    : 50
                : 0

    };
    return res.status(200).json({
        success: true,
        message: "Subscription detail for the user is:",
        data
    });

}