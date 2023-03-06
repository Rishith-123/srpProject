require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
// const hospitalRoutes = require("./routes/hospital");
const authRoutes = require("./routes/auth");
// const hospitalauthRoutes = require("./routes/hospitalauth");
// const permissionauthRoutes = require("./routes/permission");
// const fetchauthRoutes = require("./routes/fetchRecords");
// const htohRoutes = require("./routes/htoh");
// const fileRoutes = require("./routes/fileUpload")
// database connection
const {MongoClient} =  require('mongodb');
const url = 'mongodb://127.0.0.1:27017/srp';

const client = new MongoClient(url);

// async function  getData(){
//     let result = await client.connect();
//     console.log("Connection successful")
//     let db = result.db("eHealthWallet");
//     // let collection = db.collection()
// }
connection();
// getData();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/hospital", hospitalRoutes);
// app.use("/api/hospitalauth", hospitalauthRoutes);
// app.use("/api/usersPermission", permissionauthRoutes);
// app.use("/api/fetchRecords", fetchauthRoutes);
// app.use("/api/htoh", htohRoutes);
// app.use("/api/upload", fileRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));