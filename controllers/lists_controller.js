const TaskList = require('../models/list');

module.exports.tasks = function(request, response){
    
    TaskList.create({
        description: request.body.description,
        category: request.body.category,
        date: request.body.date
    },function(err, newTask){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        return response.render('back');
    });
}
