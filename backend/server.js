require("dotenv").config();
const express = require("express");
const path = require('path')
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(express.static(__dirname));
// app.use("./uploads",express.static(path.join(__dirname,"uploads")))
// const hospitalRoutes = require("./routes/hospital");
const authRoutes = require("./routes/auth");

const itemsRouter = require("./routes/items")
const profileRouter = require("./routes/profileUpdate")
// database connection
const {MongoClient} =  require('mongodb');
const url = 'mongodb://127.0.0.1:27017/srp';

// const client = new MongoClient(url);

// async function  getData(){
//     let result = await client.connect();
//     console.log("Connection successful")
//     let db = result.db("eHealthWallet");
//     // let collection = db.collection()
// }

const port = process.env.PORT || 8080;
const start = async() => {
    try {
        await connection();
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`)
        });
    } catch (error) {
        console.log("error")
    }
}
// getData();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/v1/items", itemsRouter);
app.use("/api/profileUpdate", profileRouter);


// app.use("/api/hospital", hospitalRoutes);
// app.use("/api/hospitalauth", hospitalauthRoutes);
// app.use("/api/usersPermission", permissionauthRoutes);
// app.use("/api/fetchRecords", fetchauthRoutes);
// app.use("/api/htoh", htohRoutes);
// app.use("/api/upload", fileRoutes);

app.get("/",(req,res) => {
    res.send("hello world")
})

start()