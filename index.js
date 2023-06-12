const express = require('express');
// const { dbConnection } = require('./dataBase/config');
// require('dotenv').config();


// create express server
const app = express();

// DataBase
// dbConnection();

// Public Directory
// app.use( express.static('public') );

// read and parse body
// app.use( express.json() );

// routes
// app.use('/api/events', require('./routes/events'));
app.get('/', (re, res) => {
    console.log('/ required');
    res.json({
        ok: true
    });
})


// Listening
app.listen( 4002, () => {
    console.log(`Server running on port ${ 4002 }`);
} )