const TaskList = require('../models/list');

module.exports.lists = function(request, response){

    TaskList.find({}, function(err, task){

        if(err){
            console.log('Error in fetching the task from database');
            return;
        }
       
        return response.render('list', {
            title: "Todo List",
            task: task
        });

    });
}