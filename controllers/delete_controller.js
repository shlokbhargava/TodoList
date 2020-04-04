const TaskList = require('../models/lists');

module.exports.delete = function(request, response){
    // get the id from query in the ul 
    let id = request.query.id;

    // find the contact in the database and delete it
    TaskList.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting an object from the database');
            return;
        }
        return response.redirect('back');
    });
}