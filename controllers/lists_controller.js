const TaskList = require('../models/lists');

module.exports.tasks = function(request, response){
    
    TaskList.create({
        description: request.body.description,
        category: request.body.category,
        date: request.body.date
    }, function(err){
        if(err){
            console.log('error in creating a task');
            return;
        }
        
        return response.redirect('back');
    });
}
