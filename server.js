const express       = require('express');
const app           = express();
const cors          = require('cors');
const path          = require('path');
const db            = require('./config/db');
const mysql         = require('mysql');
const bodyParser    = require("body-parser");
const cookieParser  = require('cookie-parser')
const passport      = require('passport');
const session       = require('express-session');
const PORT          = process.env.PORT || 5000;

//Express
app.use(express.json({ extended: false }));
app.use(express.static('client/build'));

//Add session support
//Saves sessions on the server
//Not good for multiple servers
app.use(session({  
    secret: process.env.SESSION_SECRET || 'simple_session_secret',
    resave: false,
    saveUninitialized: false,
}));

//passport
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

//Enable cors
app.use(cors())

//Db Connection
const pool = mysql.createPool(db);
pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!

    console.log("Connected to mysql!")
})

//Define routes
app.use('/', require('./routes/auth'))
app.use('/', require('./routes/billingRoutes'))

//Serve public files
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })



app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))