const mongoose = require('mongoose');
const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'timeoffdb';  
const dotenv = require('dotenv');
dotenv.config();



class Database {
    constructor() {
      this.dbConnect();
    }
    dbConnect() {
       mongoose.connect(process.env.MONGODB)
         .then(() => {
           console.log('Database connection successful');
           
         })
         .catch(err => {
           console.error('Database connection error');
         });
    }
  }


module.exports = new Database();