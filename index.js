const express = require('express');

const port = 8000;

// Connecting DataBase
const dataBase = require('./config/mongoose');

const app = express();

// Use express router
app.use('/', require('./routes/index'));

// set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));


app.listen(port, function(err){
    if(err){
        // Interpolation
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is up and running on port: ${port}`);
});