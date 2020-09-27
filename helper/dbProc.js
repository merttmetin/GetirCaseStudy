const mongoose = require("mongoose");
require('dotenv').config()

//Mongo DB Connection method.
module.exports = () => {
    mongoose.connect(process.env.DB_URI, 
                { useNewUrlParser: true 
                 ,useUnifiedTopology: true});
                 
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
       console.log('MongoDB : ConnectionError');
      });
    mongoose.Promise = global.Promise;
}
