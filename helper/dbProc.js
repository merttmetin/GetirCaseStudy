const mongoose = require("mongoose");
require('dotenv').config()
const error = require("../middlewear/errorHandling");

module.exports = () => {
    mongoose.connect(process.env.DB_URI, 
                { useNewUrlParser: true 
                 ,useUnifiedTopology: true});
                 
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
      });
      mongoose.connection.on('error', (err) => {
        error.dbError(res,err);
      });
    mongoose.Promise = global.Promise;
}
