const Item = require("../models/Item");
const path = require("path");
const asyncWrapper = require("../middleware/asyncWrapper");
const Student = require("../models/student");
const mongoose = require("mongoose")
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (error) {
    console.log(error);
  }
};

const addItem = asyncWrapper(async (req, res) => {
  const id = req.params.id
  console.log(id)
  var idConvert = mongoose.Types.ObjectId(req.params.id);

  let student = await Student.findOne({ UserId: idConvert });
  

  const { name } = req.body;
  const file = req.file.path;
  const item = await Item.create({ name, file });
  let documents = student.documents
  documents.push({
    name: name,
    file: file
  })
  await Student.updateOne({_id: student._id},  {$set:{documents: documents}});
  console.log(student);
  res.status(201).json({ item });
});

const downloadFile = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    return next(new Error("No item found"));
  }
  const file = item.file;
  const filePath = path.join(__dirname, `../${file}`);
  res.download(filePath);
});

module.exports = {
  getItems,
  addItem,
  downloadFile,
};