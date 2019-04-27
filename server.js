const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const cors = require('cors');
const env = require('./env');
const UsersRoute = require('./app/routes/usersRoute');
const dbConnect = require('./app/db/dbconnect');


// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());

//Logger Middleware
app.use((req, res, next) => {
  console.log(`🔥🍕[${new Date().toTimeString}]: ${req.method} ${req.url}🔥🍕`);
  next();
});

// Add middlewares for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));

app.use(express.json());


app.use('/api/v1', UsersRoute);

app.listen(env.port).on('listening', () => {
  console.log('🚀 are live on ' + env.port);
});

