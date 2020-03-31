var task = [
    {
        description: "Take a flight",
    },
    {
        description: "Buy vegetables",
    },
]

module.exports.lists = function(request, response){

    return response.render('list', {
        title: "Todo List",
        task: task
    });
}