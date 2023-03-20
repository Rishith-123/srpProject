const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { ObjectId } = require("mongodb");

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    aboutMe: { type: String, required: true },
    UserId: { type: ObjectId },
    documents: { type : Array , "default" : [] }
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;