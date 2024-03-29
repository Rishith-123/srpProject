const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URI,connectionParams);
        console.log('DB connection successful');
    } catch (error) {
        console.log(error);        
    }
}