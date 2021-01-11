//jq and js goes here to interface with dom, and use ajax calls to POST GET DELETE PUT data from express server

$(document).ready(function(){
    console.log('JQ Sourced.');
    getList();
    addClickHandlers();
});

function getList(){
    console.log('In getList');
    //AJAX GET
    $.ajax({
        type : 'GET',
        url : '/tasks'
    }).then(function (response){
        console.log('GET from server successful');
        renderList(response);
    }).catch(function (error){
        alert('Error GETting data from server!', error);
    });
}; //end getList

function addClickHandlers(){
    console.log('In addClickHandlers');
    $('#addTaskButton').on('click', handleSubmit);
}; //end addClickHandlers

function handleSubmit(){
    console.log('Add Task button clicked.');
    let task = {
        task : $('#taskInput').val()
    };
    addTask(task);
}; //end handleSubmit

function addTask(task){
    console.log('in addTask', task);
    //AJAX POST with data from input field on DOM
    $.ajax({
        type : 'POST',
        url : '/tasks',
        data: task
    }).then(function(response){
        console.log('POST successful.');
        getList();
    }).catch(function(error){
        console.log('Error in post');
        alert('Unable to add task.');
    });
}; //end addTask

function renderList(tasks){
    console.log('In renderList', tasks);
    $('#taskList').empty();

    for(let task of tasks){
        console.log('In render loop logic');
        $('#taskList').append(`
            <tr id="${task.id}">
                <td>${task.task}</td>
                <td>${task.completed}</td>
            </tr>
        `);
    } //end for of
}; //end renderList