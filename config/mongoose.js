const mongoose = require('mongoose');

//  connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

// acquire the connection (to check if it is successful)
const dataBase = mongoose.connection;

// error
dataBase.on('error', console.error.bind(console, 'error connecting to db'));

// up and running
dataBase.once('open', function(){
    console.log('Successfully connected to the database');
});


module.exports = dataBase;