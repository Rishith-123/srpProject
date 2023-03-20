
const router = require("express").Router();
const Student = require("../models/student");
const { User, validate } = require("../models/user");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose")

router.post("/:id", async (req, res) => {
    try {
        var idConvert = mongoose.Types.ObjectId(req.params.id);
      
        let student = await Student.findOne({ UserId: idConvert });
        if (student)
            return res
                .status(409)
                .send({ message: "User with given email already Exists!" });

       

        student = await new Student({ ...req.body, UserId:idConvert }).save();

        res
            .status(201)
            .send({ message: "Profile has been updated" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// router.get("/:id/verify/:token/", async (req, res) => {
//     try {
//         const user = await User.findOne({ _id: req.params.id });
//         if (!user) return res.status(400).send({ message: "Invalid link" });

//         const token = await Token.findOne({
//             userId: user._id,
//             token: req.params.token,
//         });
//         if (!token) return res.status(400).send({ message: "Invalid link" });

//         await User.updateOne({ _id: user._id }, { $set: { verified: true } });
//         await token.remove();

//         res.status(200).send({ message: "Email verified successfully" });
//     } catch (error) {
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });

module.exports = router;